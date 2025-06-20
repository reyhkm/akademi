# Akademi Inovasi Global - Frontend Prototype

This is a fully functional frontend prototype for a fictional modern school website, "Akademi Inovasi Global". It is built with a modern tech stack to showcase a visually stunning and highly interactive user experience.

## Tech Stack

- **Framework:** [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) (for global state like modals)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Features

- **Stunning Animations:** Smooth page transitions, scroll-triggered animations, and satisfying micro-interactions powered by Framer Motion.
- **Component-Based Architecture:** A clean structure with reusable UI components.
- **Responsive Design:** Fully responsive layout for all screen sizes.
- **Data Simulation:** All dynamic content (news, programs, gallery) is simulated using local JSON files, making it easy to edit and test without a backend.
- **Interactive Elements:** Features like a horizontal scrolling section, a masonry gallery with filters, a multi-step form, and an interactive map.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd akademi-inovasi-global
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Data Simulation

This project does not connect to a backend. All dynamic content is sourced from JSON files located in the `src/data/` directory.

- `src/data/news.json`: Contains blog posts for the "Latest News" section.
- `src/data/programs.json`: Contains featured programs for the homepage's horizontal scroll section.
- `src/data/curriculum.json`: Contains detailed curriculum information for the `/kurikulum` page.
- `src/data/gallery.json`: Contains items for the student life gallery.
- `src/data/testimonials.json`: Contains testimonials (currently used as a placeholder).

To change the content of the website, simply edit the corresponding JSON file. The changes will be reflected automatically in the development server thanks to Vite's Hot Module Replacement (HMR).

## Custom Fonts

The design specifies custom fonts like 'Clash Display'. To implement this, you would:
1.  Download the font files (e.g., from Fontshare).
2.  Place them in the `public/fonts` directory.
3.  Import them using `@font-face` in `src/index.css`.
4.  Reference the font family name in `tailwind.config.js`.

This prototype uses 'Inter' as a default for simplicity.
