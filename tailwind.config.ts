import type { Config } from 'tailwindcss'
module.exports = {
    plugins: [require('tailwindcss-primeui')],
    content: [
        /* nuxt app */
        './pages/**/*.vue',
        './*.vue',
      ],
} satisfies Config