# LEDream Website

A modern Next.js 16 website built with TypeScript, Tailwind CSS v3, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v3
- **UI Components**: shadcn/ui (dark theme default)
- **Package Manager**: Yarn
- **Deployment**: Vercel

## Project Structure

```
ledream-website/
├── app/              # Next.js App Router pages and layouts
├── components/        # React components (including shadcn/ui)
├── content/          # Content files (markdown, etc.)
├── lib/              # Utility functions and helpers
├── public/           # Static assets
└── middleware.ts     # Next.js middleware for rate limiting
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

## Configuration

### shadcn/ui

The project is configured for shadcn/ui. To add components:

```bash
npx shadcn@latest add [component-name]
```

Components will be added to `components/ui/`.

### TypeScript

TypeScript is configured with strict mode enabled. See `tsconfig.json` for details.

### Security

Security headers are configured in `next.config.js`:
- Content Security Policy (CSP) for self-hosted assets
- HTTPS enforcement (HSTS)
- XSS protection
- Frame options
- And more

### Rate Limiting

Rate limiting is configured via middleware. Vercel provides built-in rate limiting. For custom implementations, see `middleware.ts` for examples.

## Deployment

The project is configured for Vercel deployment. The `vercel.json` file contains deployment settings.

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

## Environment Variables

See `.env.example` for available environment variables. Copy to `.env.local` for local development.

## License

MIT