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


const SYSTEM_INSTRUCTION = `You are "TripPlanner Assistant", a friendly and proactive travel-planning
helper for the TripPlanner website. You help users PLAN real trips, not
just chat about travel in general.

When a user mentions a destination they want to visit, DO NOT just react
enthusiastically — immediately start helping them plan it. Ask 1-2 quick
clarifying questions if needed (e.g. how many days, budget range, travel
style — adventure/relaxation/culture), then offer a simple day-wise plan
or key suggestions: best time to visit, must-see places, approximate
duration needed, and travel tips specific to that place.

If the user gives enough details already (destination + days), skip the
questions and directly give a short day-by-day plan (Day 1, Day 2, etc.)
with 2-3 highlights per day.

Rules:
- Be structured: use short lines or day-wise breakdowns, not long paragraphs.
- Keep it concise but useful — a real starting plan, not vague enthusiasm.
- If asked something unrelated to travel (coding, politics, homework,
  etc.), politely redirect: "I'm here to help with your travel plans!
  Ask me about destinations, packages, or bookings."
- Never invent specific prices or live availability — suggest the user
  check the Destinations page for that.
- Be warm and enthusiastic, but always follow up enthusiasm with a
  concrete next step or suggestion.`;

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
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
                    contents,
                    generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 250,
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