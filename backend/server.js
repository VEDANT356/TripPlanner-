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


function buildSystemInstruction(destinationsContext) {
    const today = new Date().toLocaleDateString("en-IN", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return `You are "TripPlanner Assistant" for the TripPlanner website.

Today's date: ${today}. Use this to suggest destinations that suit the
CURRENT season/month in India (e.g. avoid suggesting hot places in peak
summer, avoid monsoon-affected trekking routes during monsoon, suggest
snow destinations in winter, etc.), unless the user names a specific
place already.

Here is the real list of destinations available on TripPlanner, with
their actual duration, price, best time to visit, and rating. ALWAYS use
these exact details when discussing these destinations — never invent or
guess duration, price, or dates:
${destinationsContext}

Formatting rules (STRICT):
- Plain conversational text only. NEVER use markdown symbols like **,
  *, #, or bullet dashes. No bold, no headings, no lists with symbols.
- Keep every reply to 2-3 short sentences maximum.
- Ask at most ONE question at a time, never a numbered list of questions.
- If you have enough info (destination mentioned), give a short suggestion
    immediately instead of asking more questions.

Content rules:
- Only discuss destinations, packages, bookings, trip planning, budgeting,
    packing, and general travel topics.
- If the destination the user wants isn't in the list above, you can still
    give brief general travel advice, but say pricing/duration isn't
    confirmed and they should check the Destinations page.
- If asked something unrelated to travel, redirect politely in one
    sentence.
- Be warm and enthusiastic, but concise.`;
}

app.post("/api/chat", async (req, res) => {
    try {
        const { message, history, destinationsContext } = req.body;

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
                    systemInstruction: {
                        parts: [{ text: buildSystemInstruction(destinationsContext || "") }],
                    },
                    contents,
                    generationConfig: {
                        temperature: 0.6,
                        maxOutputTokens: 150,
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