# AI Chat Bot

A web-based AI chatbot using React and OpenRouter API, built with modern web technologies and ready to deploy on Netlify.

## Features

- Real-time chat interface
- Integration with OpenRouter API for AI responses
- Modern UI with shadcn/ui components
- Responsive design

## Tech Stack

- React
- TypeScript
- Express.js
- TanStack Query
- shadcn/ui
- Tailwind CSS

## Prerequisites

Before you begin, ensure you have:
- Node.js installed (v20 or later)
- An OpenRouter API key from [OpenRouter](https://openrouter.ai/keys)

## Environment Variables

Create a `.env` file in the root directory with:

```env
OPENROUTER_API_KEY=your_api_key_here
```

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [repo-name]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## Deployment

This project is configured for deployment on Netlify. Follow these steps:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Add your environment variables in Netlify's dashboard
4. Deploy!

## Development

To start the development server:

```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## License

MIT
