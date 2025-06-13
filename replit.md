# TopBetSite - Betting Comparison Platform

## Overview

TopBetSite is a comprehensive betting comparison platform designed to help UK users find the best bookmakers, welcome offers, and betting information. The application features a modern React frontend with a Node.js/Express backend, PostgreSQL database with Drizzle ORM, and comprehensive betting-focused content management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Migration Strategy**: Schema-first approach with migration files
- **Connection**: Neon Database serverless for cloud PostgreSQL

## Key Components

### Database Schema
The application uses three main database tables:

1. **Casinos Table**: Stores bookmaker information including name, slug, logo, rating, bonus details, features, and affiliate URLs
2. **Blog Posts Table**: Content management for articles with title, slug, content (markdown), category, and SEO fields
3. **Affiliate Clicks Table**: Tracking table for monitoring affiliate link interactions

### API Structure
- RESTful API design with Express.js
- CRUD operations for casinos and blog posts
- Affiliate click tracking endpoint
- Error handling middleware with structured responses

### Frontend Pages
- **Home**: Featured bookmakers and latest offers
- **Casinos**: Complete directory of all bookmakers
- **Offers**: Dedicated page for all betting offers
- **Reviews**: Detailed bookmaker reviews
- **Blog**: Content management with category filtering
- **Resources**: Educational betting guides and strategies
- **Static Pages**: FAQ, Terms, Privacy Policy, About Us

### Content Management
- Markdown-based blog system
- SEO-optimized page structure
- Responsive design for mobile and desktop
- Comprehensive betting guides and educational content

## Data Flow

1. **User Requests**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express server handles requests and validates data with Zod schemas
3. **Database Operations**: Drizzle ORM executes SQL queries against PostgreSQL
4. **Response Handling**: Structured JSON responses with error handling
5. **Affiliate Tracking**: Click events tracked for analytics and commission purposes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Modern icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory using Vite
- Backend bundles to `dist/index.js` using esbuild
- Static assets served from the backend in production

### Environment Configuration
- Development: `npm run dev` starts both frontend and backend
- Production: `npm run build` then `npm run start`
- Database: Requires `DATABASE_URL` environment variable

### Replit Configuration
- Automatic deployment to Replit's autoscale infrastructure
- PostgreSQL module included for database support
- Port 5000 mapped to external port 80

## Changelog
- June 13, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.