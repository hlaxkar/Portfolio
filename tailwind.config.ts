/* @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: 'var(--accent)',
                    light: 'var(--accent-light)',
                    glow: 'var(--accent-glow)',
                },
                surface: {
                    DEFAULT: 'var(--bg)',
                    card: 'var(--bg-card)',
                    muted: 'var(--bg-muted)',
                },
            },
        },
    },
    plugins: [],
}