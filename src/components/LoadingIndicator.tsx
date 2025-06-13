import { Bot } from "lucide-react";

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex gap-3 mb-6 animate-fadeIn">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <Bot size={18} />
      </div>

      <div className="flex-1 max-w-[80%]">
        <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-2xl shadow-sm mr-4 relative">
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
            <span className="text-sm text-gray-500 ml-2">
              AI is thinking...
            </span>
          </div>

          {/* Message tail */}
          <div className="absolute top-3 left-[-6px] w-3 h-3 bg-white border-l border-b border-gray-200 transform rotate-45" />
        </div>
      </div>
    </div>
  );
};
