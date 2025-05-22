/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
        colors: {
            amber: {
            100: '#FEF3C7',
            500: '#F59E0B',
            600: '#D97706',
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