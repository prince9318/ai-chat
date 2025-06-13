import OpenAI from "openai";
import type { Message } from "../types/chat";

// Note: In a production app, the API key should be stored securely on the backend
// This is a demo implementation
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || "demo-key",
  dangerouslyAllowBrowser: true, // Only for demo purposes
});

export const chatService = {
  async sendMessage(messages: Message[]): Promise<string> {
    // If no API key is provided, return a demo response
    if (
      !import.meta.env.VITE_OPENAI_API_KEY ||
      import.meta.env.VITE_OPENAI_API_KEY === "demo-key"
    ) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const responses = [
            "I'm a demo AI assistant! To connect to the real OpenAI API, please add your VITE_OPENAI_API_KEY to your environment variables.",
            "This is a beautiful chat interface! Add your OpenAI API key to start having real conversations.",
            "Hello! I'm currently running in demo mode. The interface is fully functional and ready for your OpenAI integration.",
            "Great question! I'd love to help, but I'm running in demo mode. Add your API key to unlock my full potential!",
          ];
          resolve(responses[Math.floor(Math.random() * responses.length)]);
        }, 1000 + Math.random() * 2000);
      });
    }

    try {
      const openaiMessages = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: openaiMessages,
        temperature: 0.7,
        max_tokens: 500,
      });

      return (
        completion.choices[0]?.message?.content ||
        "Sorry, I could not generate a response."
      );
    } catch (error) {
      console.error("OpenAI API Error:", error);
      throw new Error(
        "Failed to get response from AI. Please check your API key and try again."
      );
    }
  },
};
