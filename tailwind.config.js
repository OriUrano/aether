/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    safelist: [
        'hover:bg-neutral-800',
        'hover:bg-neutral-700',
        'hover:bg-neutral-600',
    ],
    theme: {
        fontFamily: {
            'rubik': ['"Rubik"'],
            'sans': ['"Rubik"']
        },
        extend: {
        },
    },
    plugins: [],
}

