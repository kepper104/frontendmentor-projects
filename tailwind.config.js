/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                Rubik: ["Rubik", "sans-serif"],
                Outfit: ["Outfit", "sans-serif"],
                Figtree: ["Figtree", "sans-serif"],
                Inter: ["Inter", "sans-serif"]
            },
            colors: {
                "custom-qr-light-gray": "hsl(212, 45%, 89%)",
                "custom-qr-gray-blue": "hsl(220, 15%, 55%)",
                "custom-qr-dark-blue": "hsl(218, 44%, 22%)",

                "custom-blog_preview-yellow": "hsl(47, 88%, 63%)",
                "custom-blog_preview-gray": "hsl(0, 0%, 50%)",
                "custom-blog_preview-black": "hsl(0, 0%, 7%)",

                "custom-social_links-green": "hsl(75, 94%, 57%)",
                "custom-social_links-gray": "hsl(0, 0%, 20%)",
                "custom-social_links-dark-gray": "hsl(0, 0%, 12%)",
                "custom-social_links-off-black": "hsl(0, 0%, 8%)"
            }
        }
    },
    plugins: []
}
