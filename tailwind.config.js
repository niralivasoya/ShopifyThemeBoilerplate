/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./sections/**/*.liquid', './snippets/*.liquid'],
    theme: {
        color: {
            white: '#fff',
            black: '#000',
            gray: {
                100: '#ddd',
            },
        },
        extend: {},
    },
    plugins: [],
};
