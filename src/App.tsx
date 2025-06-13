import { useRef, useEffect } from "react";
import { useChat } from "./hooks/useChat";
import { ChatHeader } from "./components/chatHeader";
import { ChatMessage } from "./components/ChatMessage";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { ChatInput } from "./components/ChatInput";
import { ErrorMessage } from "./components/ErrorMessage";
import { EmptyState } from "./components/EmptyState";

function App() {
  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
    retryLastMessage,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative min-h-screen flex flex-col max-w-4xl mx-auto">
        <ChatHeader
          onClearChat={clearChat}
          onRetry={error ? retryLastMessage : undefined}
          hasMessages={messages.length > 0}
          hasError={!!error}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          {messages.length === 0 ? (
            <EmptyState onSendMessage={sendMessage} />
          ) : (
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-0">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {isLoading && <LoadingIndicator />}

              <div ref={messagesEndRef} />
            </div>
          )}

          {error && <ErrorMessage message={error} onRetry={retryLastMessage} />}

          <ChatInput
            onSendMessage={sendMessage}
            isLoading={isLoading}
            disabled={!!error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
