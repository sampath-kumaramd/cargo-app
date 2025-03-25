# Cargo App

A modern web application for cargo and logistics management built with Next.js 14.

## Project Overview

Cargo App is a comprehensive logistics management system that helps businesses streamline their cargo operations. The application provides features for tracking shipments, managing inventory, and handling customer orders efficiently.

## Why Choose Next.js?

Next.js was chosen for this project for several compelling reasons:

- **Server-Side Rendering (SSR):** Provides better performance and SEO optimization for cargo tracking pages
- **API Routes:** Built-in API handling for backend functionality without separate server setup
- **File-Based Routing:** Intuitive and maintainable routing system for complex cargo management workflows
- **Image Optimization:** Automatic image optimization for product catalogs and documentation
- **TypeScript Support:** Native TypeScript support for better type safety and developer experience
- **Fast Refresh:** Instant feedback during development for better productivity

## Tech Stack

- **Framework:** Next.js 14.2.5
  - App Router for modern routing
  - Server Components for improved performance
  - Edge Runtime for global deployment
- **UI Library:** React 18
  - Concurrent features for better user experience
  - Automatic batching for improved performance
  - Transitions API for smooth UI updates
- **Styling:** Tailwind CSS
  - Utility-first approach for rapid development
  - JIT compiler for smaller production builds
  - Dark mode support out of the box
- **Components:** shadcn/ui
  - Accessible and customizable components
  - Consistent design system
  - Built on Radix UI primitives
- **Language:** TypeScript
  - Type safety for better code quality
  - Enhanced IDE support
  - Better maintainability
- **State Management:** Zustand
  - Lightweight and simple state management
  - Built-in TypeScript support
  - Easy integration with React
- **Form Handling:** React Hook Form + Zod
  - Performant form handling
  - Built-in validation
  - Type-safe form schemas
- **API Integration:** TanStack Query (React Query)
  - Efficient data fetching and caching
  - Automatic background updates
  - Optimistic updates support

## Key Features

- Real-time cargo tracking
- Inventory management system
- Customer order processing
- Analytics dashboard
- User authentication and authorization
- Mobile-responsive design
- Dark/Light mode support
- Multi-language support

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

[Describe your folder structure here]

## Development Workflow

This project uses several tools to ensure code quality:

- **ESLint:** For code linting
- **Prettier:** For code formatting
- **Husky:** For Git hooks
- **lint-staged:** For running linters on staged files

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run prettier-watch` - Watch files and format them with Prettier

## Environment Variables

The project uses Zod for environment variable validation. Add your environment variables to the `.env.local` file and update the schema in `src/lib/env.ts`.

## Styling

This project uses Tailwind CSS with a custom configuration. The theme is defined in `tailwind.config.ts` and includes:

- Custom color palette with light and dark mode support
- Custom animations
- Responsive design utilities

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

## Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.  
Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

All rights reserved by Sampath Kumara
