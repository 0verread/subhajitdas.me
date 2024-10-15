import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Roboto', ...defaultTheme.fontFamily.serif],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
