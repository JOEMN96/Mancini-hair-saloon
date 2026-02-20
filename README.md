# Mancini's Hair Salon

Welcome to the **Mancini's Hair Salon** website repository! This is a modern, responsive, and dynamic web application built for Kanata's premier hair styling salon. The site features a premium design with a dark mode toggle, smooth animations, and an intuitive user interface.

## 🚀 Features

- **Modern UI/UX**: Designed with a sleek, premium, and fully responsive layout.
- **Dark & Light Mode**: Seamlessly toggle between dark and light themes, remembering the user's preference.
- **Dynamic Animations**: Smooth scroll animations, text effects, and micro-interactions powered by `motion` (Framer Motion) and custom CSS.
- **Routing**: Client-side routing with `react-router-dom` for quick and seamless page transitions (Home, Services, About, Gallery, Book, Contact).
- **SEO Optimized**: Pre-configured meta tags, Open Graph tags, and Schema.org JSON-LD structured data for better search engine visibility.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: `motion` and `tw-animate-css`
- **3D Graphics**: `three.js`, `@react-three/fiber`, `@react-three/drei` (for interactive elements)

## 📦 Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) or [Node.js](https://nodejs.org/) installed.

### Installation

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/JOEMN96/Mancini-hair-saloon.git
cd Barbershop-site

# Install dependencies using Bun
bun install
# OR using npm
npm install
```

### Running the Development Server

Start the Vite development server:

```bash
bun run dev
# OR npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
bun run build
# OR npm run build
```

This will run TypeScript type checking and then bundle the app into the `dist` directory.

### Previewing the Production Build

To preview the generated production build locally:

```bash
bun run preview
# OR npm run preview
```

## 📁 Project Structure

- `src/components/`: Reusable React components (UI basics, layout headers/footers, specialized animations).
- `src/pages/`: Main page components for each route (Home, About, Services, etc.).
- `src/data/`: Static data and content configuration (`siteConfig.ts`, etc.).
- `src/lib/`: Utility functions (e.g., Tailwind class merging).
- `src/index.css`: Global CSS and Tailwind theme configuration (including custom color variables).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
