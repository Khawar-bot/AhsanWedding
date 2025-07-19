# Wedding Website Replit Configuration

## Overview

This is a wedding website application for Ahsan and Sobia's celebration called "AhsanKiShadi". It's built as a full-stack TypeScript application with React frontend and Express backend, featuring a modern Islamic wedding theme with Quranic verses, family showcases, countdown timer, and heartfelt messages. The website uses shadcn/ui components and includes comprehensive family data with 22+ groom's family members.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom wedding theme colors
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Build Tool**: esbuild for production bundling
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Provider**: Neon Database serverless
- **Schema**: Located in `shared/schema.ts` for type sharing
- **Migrations**: Managed via drizzle-kit in `./migrations` directory

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with mobile hamburger menu
2. **CountdownTimer**: Real-time countdown to wedding date (March 15, 2025)
3. **QuranicVerse**: Islamic blessing display component
4. **FamilyCard**: Displays family member information with photos
5. **MessageCard**: Shows family messages and well-wishes
6. **UI Library**: Complete set of shadcn/ui components (buttons, cards, dialogs, etc.)

### Backend Components
1. **Storage Layer**: Abstract storage interface with in-memory implementation
2. **Routes**: Express route handlers (currently minimal setup)
3. **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user structure with id, username, password fields
- **Type Safety**: Drizzle-zod integration for runtime validation

## Data Flow

1. **Client Requests**: React components make API calls via TanStack Query
2. **Server Processing**: Express handles requests through registered routes
3. **Data Storage**: Storage layer abstracts database operations
4. **Response**: JSON responses sent back to client
5. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React routing
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Fast development build tool
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast bundler for production
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Mode
- Uses Vite dev server with Express middleware integration
- Hot module replacement (HMR) enabled
- Source maps and error overlays for debugging
- Replit-specific plugins for development environment

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets
4. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: Required for PostgreSQL connection
- **NODE_ENV**: Controls development vs production behavior
- **Build Scripts**: Separate commands for development (`dev`) and production (`build`, `start`)

The application follows a monorepo structure with shared TypeScript types between frontend and backend, ensuring type safety across the entire stack. The wedding theme is implemented through custom CSS variables and Tailwind configuration, creating a cohesive visual experience for the celebration website.