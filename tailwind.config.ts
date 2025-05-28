/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './src/pages/**/*.{ts,tsx,js,jsx,mdx}',
        './src/components/**/*.{ts,tsx,js,jsx,mdx}',
        './src/app/**/*.{ts,tsx,js,jsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
            "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        },
        colors: {
            amber: {
            100: '#FEF3C7',
            500: '#F59E0B',
            600: '#D97706',
            "custom-white": "#ffffff",
            "custom-transparent": "transparent",
            },
        },
        animation: {
            'fade-in': 'fadeIn 0.5s ease-in forwards',
        },
        keyframes: {
            fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '850px',
            'xl': '1280px', 
            '2xl': '1536px'
        }
        },
    },
    plugins: [require("tailwindcss-animate")],
}