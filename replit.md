# Top Bet Site - Esports Betting Platform

## Overview

Top Bet Site is a dedicated esports betting platform designed to help users master competitive gaming wagering. The application provides comprehensive guides for CS2, League of Legends, Dota 2, and Valorant betting, alongside detailed reviews of esports-focused betting sites. Features a dark gaming-themed React frontend with neon highlights, Node.js/Express backend, and specialized esports content management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with dark esports theme and neon highlights
- **Typography**: Orbitron font for gaming aesthetic, Inter for body text
- **UI Components**: Radix UI components with shadcn/ui, customized for esports theme
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and production builds
- **Theme**: Dark-first design with purple, blue, and green neon accents

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

1. **Casinos Table**: Stores esports betting site information including name, slug, logo, rating, bonus details, esports-specific features, and affiliate URLs
2. **Blog Posts Table**: Content management for esports articles with title, slug, content (markdown), category, and SEO fields
3. **Affiliate Clicks Table**: Tracking table for monitoring affiliate link interactions

### API Structure
- RESTful API design with Express.js
- CRUD operations for casinos and blog posts
- Affiliate click tracking endpoint
- Error handling middleware with structured responses

### Frontend Pages
- **Home**: Featured esports betting sites with gaming-themed design
- **Esports Betting Sites**: Complete directory comparing Betway, GG.Bet, Pinnacle, Stake, and others
- **Esports Betting Guide**: Comprehensive guide covering CS2, LoL, Dota 2, and Valorant
- **Game-Specific Guides**: Individual betting guides for CS2, League of Legends, Dota 2, and Valorant
- **Blog**: Esports-focused content management with tournament analysis and betting strategies
- **Resources**: Educational esports betting guides and responsible gambling information
- **Static Pages**: FAQ, Terms, Privacy Policy, About Us (updated for esports focus)

### Content Management
- Markdown-based esports blog system
- SEO-optimized page structure with esports keywords
- Dark theme responsive design optimized for gaming audience
- Comprehensive esports betting guides and educational content
- Game-specific strategy guides for major esports titles

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
- June 14, 2025: Major platform transformation to esports betting focus
  - Complete UI redesign with dark gaming theme and neon highlights
  - Replaced casino/sportsbook content with esports betting sites (Betway, GG.Bet, Pinnacle, Stake)
  - Added comprehensive esports betting guides for CS2, LoL, Dota 2, and Valorant
  - Implemented Orbitron gaming font and enhanced visual effects
  - Updated sample data to reflect esports betting platforms
  - Created dedicated esports betting guide pages with tactical insights
  - Transformed homepage with esports-focused messaging and CTAs
- June 13, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.