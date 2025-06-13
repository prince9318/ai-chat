import { Bot, Trash2, RotateCcw } from "lucide-react";

interface ChatHeaderProps {
  onClearChat: () => void;
  onRetry?: () => void;
  hasMessages: boolean;
  hasError: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onClearChat,
  onRetry,
  hasMessages,
  hasError,
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              AI Assistant
            </h1>
            <p className="text-sm text-gray-500">Always here to help</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasError && onRetry && (
            <button
              onClick={onRetry}
              className="px-3 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <RotateCcw size={16} />
              Retry
            </button>
          )}

          {hasMessages && (
            <button
              onClick={onClearChat}
              className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <Trash2 size={16} />
              Clear Chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
