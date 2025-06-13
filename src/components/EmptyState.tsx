import { MessageCircle, Sparkles, Zap, Shield } from "lucide-react";

interface EmptyStateProps {
  onSendMessage: (message: string) => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onSendMessage }) => {
  const suggestions = [
    "What's the weather like today?",
    "Help me write a creative story",
    "Explain quantum computing simply",
    "Plan a healthy meal for dinner",
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageCircle size={32} className="text-white" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to AI Chat
        </h2>
        <p className="text-gray-600 mb-8">
          Start a conversation with our AI assistant. Ask anything!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Sparkles size={16} className="text-blue-500" />
            Creative & Helpful
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Zap size={16} className="text-purple-500" />
            Fast Responses
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield size={16} className="text-green-500" />
            Secure & Private
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MessageCircle size={16} className="text-teal-500" />
            Natural Conversation
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 mb-3">
            Try these suggestions:
          </p>
          <div className="grid gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSendMessage(suggestion)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-left"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
