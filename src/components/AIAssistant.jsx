import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { destinations } from "../data/destinations";
import "../styles/AIAssistant.css";

function AIAssistant() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            role: "model",
            text: "Hi! I'm your TripPlanner Assistant  Ask me about destinations, packages, or planning your next trip!",
        },
    ]);
    const [loading, setLoading] = useState(false);

    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open]);

    const handleSend = async () => {
        const trimmed = input.trim();
        if (!trimmed || loading) return;

        const newMessages = [...messages, { role: "user", text: trimmed }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const history = messages.slice(-6).map((m) => ({
                role: m.role,
                parts: [{ text: m.text }],
            }));

            const destinationsContext = destinations
                .map(
                    (d) =>
                        `${d.name}: ${d.duration}, price ${d.price}, best time ${d.bestTime}, rating ${d.rating}`
                )
                .join(" | ");

            const res = await fetch("https://tripplanner-gqth.onrender.com/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: trimmed,
                    history,
                    destinationsContext,
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to get reply");

            setMessages((prev) => [
                ...prev,
                { role: "model", text: data.reply },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "model",
                    text: "Oops, something went wrong. Please try again in a moment.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <button
                className="chat-fab"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Open chat assistant"
            >
                <FaRobot />
            </button>

            {open && (
                <div className="chat-window">

                    <div className="chat-header">
                        <div className="chat-header-icon">
                            <FaRobot />
                        </div>

                        <div className="chat-header-text">
                            <h4>TripPlanner Assistant</h4>
                            <span>Your personal travel guide</span>
                        </div>

                        <div className="chat-header-actions">
                            <span
                                className="chat-close-text"
                                onClick={() => setOpen(false)}
                            >
                                Close Chat
                            </span>
                            <FaTimes
                                className="chat-close-icon"
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, i) => (
                            <div key={i} className="chat-message">
                                <span className="chat-sender-label">
                                    {msg.role === "user"
                                        ? "YOU"
                                        : "TRIPPLANNER ASSISTANT"}
                                </span>
                                <div
                                    className={`chat-bubble ${
                                        msg.role === "user" ? "user" : "bot"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="chat-message">
                                <span className="chat-sender-label">
                                    TRIPPLANNER AI
                                </span>
                                <div className="chat-bubble bot typing">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}

                        <div ref={scrollRef}></div>
                    </div>

                    <div className="chat-disclaimer">
                        TripPlanner Assistant only helps with travel-related
                        questions. It does not store or access your personal
                        booking data.
                    </div>

                    <div className="chat-input-row">
                        <input
                            type="text"
                            placeholder="Ask a travel question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={handleSend} aria-label="Send message">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default AIAssistant;