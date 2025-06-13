import type { Message } from "../types/chat";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 mb-6 ${
        isUser ? "flex-row-reverse" : "flex-row"
      } animate-fadeIn`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            : "bg-gradient-to-r from-green-500 to-teal-600 text-white"
        }`}
      >
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>

      <div
        className={`flex-1 max-w-[80%] ${
          isUser ? "flex justify-end" : "flex justify-start"
        }`}
      >
        <div
          className={`relative px-4 py-3 rounded-2xl shadow-sm ${
            isUser
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-4"
              : "bg-white text-gray-800 border border-gray-200 mr-4"
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
            {message.content}
          </p>

          {/* Message tail */}
          <div
            className={`absolute top-3 w-3 h-3 transform rotate-45 ${
              isUser
                ? "right-[-6px] bg-purple-600"
                : "left-[-6px] bg-white border-l border-b border-gray-200"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
