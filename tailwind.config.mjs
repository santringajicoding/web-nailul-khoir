/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                pesantren: '#128c7e',
                emas: '#dfb15b'
            }
        },
    },
    plugins: [],
}
