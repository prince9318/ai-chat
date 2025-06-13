import { useState, useCallback } from "react";
import { Message, ChatState } from "../types/chat";
import { chatService } from "../services/chatService";

export const useChat = () => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        content,
        role: "user",
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        isLoading: true,
        error: null,
      }));

      try {
        const response = await chatService.sendMessage([
          ...state.messages,
          userMessage,
        ]);

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          role: "assistant",
          timestamp: new Date(),
        };

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, assistantMessage],
          isLoading: false,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : "An error occurred",
        }));
      }
    },
    [state.messages]
  );

  const clearChat = useCallback(() => {
    setState({
      messages: [],
      isLoading: false,
      error: null,
    });
  }, []);

  const retryLastMessage = useCallback(() => {
    if (state.messages.length > 0) {
      const lastUserMessage = [...state.messages]
        .reverse()
        .find((msg) => msg.role === "user");
      if (lastUserMessage) {
        // Remove the last assistant message if it exists and there was an error
        const messagesWithoutLastAssistant = state.messages.filter(
          (msg, index) =>
            !(index === state.messages.length - 1 && msg.role === "assistant")
        );
        setState((prev) => ({
          ...prev,
          messages: messagesWithoutLastAssistant,
        }));
        sendMessage(lastUserMessage.content);
      }
    }
  }, [state.messages, sendMessage]);

  return {
    ...state,
    sendMessage,
    clearChat,
    retryLastMessage,
  };
};
