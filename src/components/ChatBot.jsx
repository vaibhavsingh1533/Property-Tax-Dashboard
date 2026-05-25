import { useState } from "react";
import axios from "axios";

function ChatBot({ data }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async (customQuestion = null) => {
    const finalQuestion = customQuestion || question;

    if (!finalQuestion) return;

    try {
      setLoading(true);
      setAnswer("");

      const citySummary = {};

      data.forEach((item) => {
        if (!citySummary[item.tenant]) {
          citySummary[item.tenant] = {
            totalProperties: 0,
            approved: 0,
            rejected: 0,
            pending: 0,
            totalCollection: 0,
          };
        }

        citySummary[item.tenant].totalProperties++;

        if (item.status === "Approved") {
          citySummary[item.tenant].approved++;
        }

        if (item.status === "Rejected") {
          citySummary[item.tenant].rejected++;
        }

        if (item.status === "Pending") {
          citySummary[item.tenant].pending++;
        }

        citySummary[item.tenant].totalCollection += item.collection_inr;
      });

const prompt = `
You are a smart property tax analytics AI assistant.

Use ONLY the dataset below.

City Data:
${JSON.stringify(citySummary)}

Question:
${finalQuestion}

Instructions:
- Give clear professional answers.
- Do NOT use markdown symbols like *, **, or bullet characters.
- Show information line by line in clean plain text.
- If summary is asked, list each city on a separate line.
- Use proper INR currency formatting with ₹.
- Keep response readable and professional.
- No unnecessary explanation.
- Also add one space and vertical line after one property.
- add line spacing to look it clear and also add the arrow in front of answer.
`;

      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "Property Dashboard",
          },
        }
      );

      setAnswer(response.data.choices[0].message.content);

    } catch (error) {
      console.log(error.response?.data || error.message);
      setAnswer("AI service unavailable. Please configure VITE_OPENROUTER_API_KEY in the .env file.");
    } finally {
      setLoading(false);
    }
  };

  const suggestions = [
    "Which city has highest collection?",
    "Compare Mumbai and Delhi",
    "How many rejected in Jaipur?",
    "Which city has most pending properties?",
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">
        AI Chat Assistant
      </h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((item, index) => (
          <button
            key={index}
            onClick={() =>{ 
                 setQuestion(item);
                askAI(item)}}
            className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm hover:bg-blue-200"
          >
            {item}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask any property question..."
        className="w-full p-3 border rounded-lg"
      />

      <button
        onClick={() => askAI()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="mt-4 p-4 bg-gray-100 rounded-xl">
          <strong>Answer:</strong>
          <p className="mt-2 whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default ChatBot;
