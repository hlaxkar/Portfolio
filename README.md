# Harshit Laxkar | Full Stack Developer Portfolio

This is a professional portfolio website built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**. It features rich 3D interactions using **Three.js** (`@react-three/fiber`), SEO optimization, and a modern, responsible design to showcase my skills, projects, and experience.

## 🚀 Features

*   **Modern Tech Stack:** Built with the latest Next.js 15 App Router and React 19.
*   **3D Visuals:** Integrated 3D elements using Three.js and `@react-three/drei` for an immersive experience.
*   **Responsive Design:** Fully responsive layout styled with Tailwind CSS v4.
*   **Performance:** Optimized for speed with Vercel Speed Insights.
*   **Analytics:** Integrated Vercel Analytics to track user engagement.
*   **SEO Friendly:** Metadata managed via `next-seo` and `next-sitemap` for better search visibility.

## 🛠️ Tech Stack

*   **Framework:** [Next.js 15](https://nextjs.org/)
*   **Library:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **3D Graphics:** [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   **Deployment:** [Vercel](https://vercel.com)

## 📂 Sections

The application is structured into the following key sections:

*   **Hero:** Introduction and visual hook.
*   **About:** Professional background and bio.
*   **Experience:** Work history and career timeline.
*   **Projects:** Showcase of key projects and contributions.
*   **Skills:** Technical proficiency and tools.
*   **Contact:** Ways to get in touch.

## 🏃‍♂️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hlaxkar/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates the `.next` folder with the production artifacts. You can start the production server with:

```bash
npm run start
```

## 📜 Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production and generates the sitemap.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Runs ESLint to check for code quality issues.

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js App Router pages and layouts
│   │   ├── components/  # Reusable UI components (Hero, About, etc.)
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Main landing page
│   └── types/       # TypeScript type definitions
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
