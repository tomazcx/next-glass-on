/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                gray: {
                    300: "#f2f2f2"
                }
            }
        },
    },
    plugins: [],
}