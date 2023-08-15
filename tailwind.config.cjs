/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				marquee: "marquee 50s linear infinite"
			}, keyframes: {
				marquee: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - 2.5rem))',
					},
				},
			}
		},
		fontFamily: {
			'sans': ['ui-sans-serif', 'Inter'],
			'serif': ['ui-serif', 'Georgia'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
			'display': ['Oswald'],
			'body': ["Inter"]
		}
	},
	plugins: [],
}
