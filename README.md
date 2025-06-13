# AI Chatbot

A modern AI chat interface built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Connects to OpenAI's GPT models for conversational AI.

## Features

- Beautiful, responsive chat UI
- Supports OpenAI GPT-3.5 (or demo mode)
- Fast, creative, and helpful responses
- Error handling and retry
- Clear chat functionality
- Tailwind CSS styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```sh
git clone https://github.com/your-username/ai-chat.git
cd ai-chat
npm install
```

### Running the App

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## OpenAI API Key

To enable real AI responses, add your OpenAI API key:

1. Create a `.env` file in the project root.
2. Add:

   ```
   VITE_OPENAI_API_KEY=your-openai-key-here
   ```

Without an API key, the app runs in demo mode with sample responses.

## Project Structure

```
src/
  components/      # UI components
  hooks/           # Custom React hooks
  services/        # API and business logic
  types/           # TypeScript types
  assets/          # Static assets
  index.css        # Tailwind CSS and custom styles
  App.tsx          # Main app component
  main.tsx         # Entry point
```

## License

MIT

---

Inspired by modern chat UIs and powered by [OpenAI](https://openai.com/)

---

> Designed and developed with ❤️ by prince9318
