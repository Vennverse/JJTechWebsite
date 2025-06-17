# JJ-Tech IT Services Platform

## Overview

JJ-Tech is a comprehensive IT services platform built with a modern full-stack architecture. The application serves as a business website showcasing IT services, PMO services, and IT training offerings. It features a React-based frontend with TypeScript, Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS custom properties for theming

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Build System**: ESBuild for server-side bundling

### Database Schema
The application uses PostgreSQL with two main tables:
- **users**: Basic user authentication (id, username, password)
- **contact_submissions**: Contact form submissions with full customer details
- Drizzle ORM provides type-safe database operations and schema management

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile menu support
- **Pages**: Dedicated pages for services, training, PMO services, about, and contact
- **UI Components**: Comprehensive shadcn/ui component library integration
- **Theme System**: Light/dark theme support with system preference detection
- **Forms**: React Hook Form with Zod validation for contact submissions

### Backend Services
- **Contact API**: Handles contact form submissions with validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Detailed API request logging for development

### Shared Schema
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for runtime validation and type inference
- **Database Schema**: Drizzle schema definitions with automatic type generation

## Data Flow

1. **Contact Form Submission**:
   - Frontend form validates input using Zod schema
   - TanStack Query mutation sends data to `/api/contact`
   - Backend validates with shared schema and stores in database
   - Success/error feedback provided to user

2. **Static Content**:
   - Service pages render static content about IT services, PMO, and training
   - Navigation handled by Wouter for smooth page transitions
   - Content optimized for SEO and accessibility

3. **Development Workflow**:
   - Vite dev server handles frontend with HMR
   - Express server provides API endpoints
   - Database migrations managed through Drizzle Kit

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- TanStack Query for server state management

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible component foundation
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Development Tools
- Vite for frontend build tooling
- ESBuild for backend bundling
- TypeScript for type safety
- Drizzle Kit for database management

### External Services
- Neon Database for PostgreSQL hosting
- YouTube integration for embedded video content
- Replit deployment platform integration

## Deployment Strategy

### Development Environment
- Uses Replit's integrated development environment
- Hot module replacement for frontend development
- Automatic server restart on backend changes
- PostgreSQL database provisioned through Replit

### Production Build
- Frontend built with Vite to optimized static assets
- Backend bundled with ESBuild for Node.js runtime
- Database migrations applied through Drizzle Kit
- Static assets served from Express server

### Environment Configuration
- Environment variables for database connection
- Separate development and production configurations
- Port configuration for Replit deployment (5000 → 80)

## Changelog

```
Changelog:
- June 16, 2025. Initial setup
- June 16, 2025. Added AI Solutions page with comprehensive service categories and industry applications
- June 16, 2025. Updated navigation to include AI Solutions menu item
- June 16, 2025. Removed all JJ-Tech phone numbers from website while preserving contact form functionality
- June 16, 2025. Finalized AI Solutions with 7 tiered services: AI Essentials (small business), AI Growth Package (mid-tier), AI Business Pro Suite, AI for Consulting Services, AI Strategy & Consulting, AI Custom Development, Marketing/Lead Generation/Sales Cycle
- June 16, 2025. Updated navigation order: IT Services → AI Solutions → PMO and ITSM Services → IT Training → About Us → Contact Us
- June 17, 2025. Added Staffing and Recruiting page with comprehensive recruiting services for IT professionals, AI specialists, project managers, and executives
- June 17, 2025. Updated AI Solutions page: removed AI Strategy & Consulting, added AI Chatbots and AI Brains services
- June 17, 2025. Removed all "Learn More" buttons from website to simplify call-to-action structure
- June 17, 2025. Updated navigation menu to include Staffing and Recruiting link
- June 17, 2025. Added three new service boxes to home screen: QA & Testing Services, AI Solutions, and Training & Coaching
- June 17, 2025. Added AI Training category to IT Training page with 6 specialized AI courses including ML fundamentals, neural networks, and AI ethics
- June 17, 2025. Updated all email addresses throughout website to show both Info@jj-tech.co and JJ.tech.us.corp@gmail.com
- June 17, 2025. Added Custom App Development & Website Creation service box to home page
- June 17, 2025. Added Digital Marketing & Lead Generation service box to home page
- June 17, 2025. Simplified contact page - removed complex form, created clean contact information layout with email links, business hours, and response times
- June 17, 2025. Updated all page footers to consistent format matching IT Training page style with dual email addresses
- June 17, 2025. Changed contact page call-to-action from "Contact Us Today" to "Email Us" while maintaining same footer structure
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```