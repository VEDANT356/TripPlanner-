const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.get("/", (req, res) => {
    res.send("TripPlanner Backend is Working !");
});

app.post("/api/payment/order", async (req, res) => {
    try {
        const { amount } = req.body;

        const options = {
            amount: Math.round(Number(amount) * 100),
            currency: "INR",
            receipt: `trip_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        res.json(order);
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        res.status(500).json({
            message: "Unable to create Razorpay order",
        });
    }
});

// ---------- AI Travel Assistant (Gemini) ----------

const SYSTEM_INSTRUCTION = `You are "TripPlanner Assistant", a friendly travel-planning helper
for the TripPlanner website. You ONLY help with: destinations, travel
packages, bookings, trip planning tips, budgeting for trips, packing
advice, and general travel questions.

Rules:
- Keep answers short and conversational (2-4 sentences unless the user
  asks for a detailed itinerary).
- If asked something unrelated to travel (coding, politics, homework,
  etc.), politely redirect: "I'm here to help with your travel plans!
  Ask me about destinations, packages, or bookings."
- Never invent specific prices or availability you don't actually know
  — suggest the user check the Destinations page for live details.
- Be warm, helpful, and enthusiastic about travel.`;

app.post("/api/chat", async (req, res) => {
    try {
        const { message, history } = req.body;

        if (!message || typeof message !== "string") {
            return res.status(400).json({ error: "Message is required" });
        }

        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ error: "Server misconfigured: missing API key" });
        }

        const contents = [
            ...(Array.isArray(history) ? history : []),
            { role: "user", parts: [{ text: message }] },
        ];

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
                    contents,
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 300,
                    },
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API error:", data);
            return res.status(response.status).json({
                error: data?.error?.message || "Gemini API request failed",
            });
        }

        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "Sorry, I couldn't come up with a reply right now. Try again?";

        res.json({ reply });
    } catch (error) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});