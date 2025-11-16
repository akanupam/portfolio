# Copilot Instructions for Portfolio V1

## Project Overview
This is a **Next.js 13 + TypeScript portfolio website** with a focus on simplicity and readability. It's a minimal scaffold designed for easy customization without complex tooling.

**Key Tech Stack:**
- Next.js 13.5.6 with TypeScript (strict mode)
- React 18.2 (functional components)
- Plain CSS (no CSS-in-JS) with CSS variables for theming
- Zero external UI framework dependencies

## Architecture & Component Structure

### Layout Pattern
All pages use a **Layout wrapper** (`components/Layout.tsx`) that provides:
- **Navbar** component (sticky header with navigation links and social icons)
- **Main content area** (children render here)
- **Footer** with dynamic year

The pattern is: `pages/*.tsx` imports `Layout`, passes content as children.

**Example:**
```tsx
import Layout from '../components/Layout'
export default function Home() {
  return <Layout>{/* page content */}</Layout>
}
```

### Page Structure
- `pages/index.tsx` - Hero section with projects, skills, experience, and articles (main landing page)
- `pages/projects.tsx` - Dedicated projects showcase (currently minimal; maps over project array)
- `pages/about.tsx` - About page (exists but minimal)
- `pages/_app.tsx` - Next.js app wrapper, imports global styles

Pages are file-based routes; no explicit routing config needed.

### Component Conventions
- **Location:** `components/` folder
- **Naming:** PascalCase (e.g., `Navbar.tsx`, `Layout.tsx`)
- **Props:** Use `PropsWithChildren` from React for layout components
- **Styling:** Apply `className` strings referencing CSS variable names (e.g., `className="nav"`, `className="container"`)
- No prop drilling for styling; use CSS classes and the global design system

## CSS & Design System

### CSS Variables (in `styles/globals.css`)
All theming uses CSS custom properties:
- **Colors:** `--accent`, `--accent-light`, `--accent-dark`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-muted`, `--highlight`
- **Layout:** `--max-width: 1100px`
- **Effects:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--transition: all 0.3s cubic-bezier(...)`

### CSS Organization
- Section comments like `/* ===== RESET & BASE ===== */` separate logical blocks
- **Container pattern:** Utility class `.container` provides max-width + auto-center + responsive padding (1.5rem)
- **No CSS modules or BEM:** Simple flat class names that map to global styles
- Responsive design uses media queries (search for `@media` in globals.css)

### Gradient Pattern
Project cards use inline gradient styles:
```tsx
gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
style={{ background: project.gradient }}
```

## Data Structure & Content Patterns

### Projects & Skills Arrays
Content is **hardcoded in page components** (no external JSON/API):
- `projects` array in `index.tsx` with fields: `title`, `desc`, `github`, `tags`, `gradient`
- `skillsByCategory` object for categorized skill display
- `experience` array with timeline entries
- `articles` array for writing portfolio

**To add content:** Edit the respective array in the page component directly.

### Configuration Points
- **Personal info:** Edit name/email in `components/Navbar.tsx` (h1.logo, social links)
- **Social links:** GitHub and LinkedIn links hardcoded in `Navbar.tsx` with SVG icons

## Build & Development Commands

From `package.json`:
- `npm run dev` - Start dev server on port 3000
- `npm run build` - Compile for production (Next.js static export or serverless functions)
- `npm start` - Run production build
- `npm run lint` - Run Next.js ESLint rules

**Development workflow:**
1. Run `npm install` first (dependencies are minimal)
2. Start with `npm run dev`
3. Open http://localhost:3000
4. Files auto-reload on save (Next.js fast refresh)

## Important Conventions

1. **No external state management** - Props flow down from page components; use React hooks (`useState`, `useEffect`) for local state if needed
2. **Strict TypeScript** - `tsconfig.json` enforces `"strict": true`; always provide explicit types
3. **Plain CSS with variables** - Don't introduce Tailwind or CSS-in-JS; extend via CSS variables if needed
4. **Avoid absolute imports** - Use relative imports (`../components/Layout`) per current codebase style
5. **Functional components only** - No class components in this codebase

## When Adding Features

- **New page?** Create `pages/newpage.tsx`, import `Layout`, follow existing pattern
- **New component?** Add to `components/`, use TypeScript interfaces for props, apply className strings
- **New styles?** Add to `globals.css` using existing CSS variable naming; don't create separate CSS files
- **New content?** Update the relevant array in the page component (e.g., add to `projects` array in `index.tsx`)
