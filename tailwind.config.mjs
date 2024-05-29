/** @type {import('tailwindcss').Config} */
import tailwindHamburgers from 'tailwind-hamburgers'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'serif': ['Lora'],
			'sans': ['Montserrat']
		},
		extend: {
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' },
				}
			},
			transitionProperty: {
				'width': 'width'
			},
			colors: {
				'tltr': {
					'50': '#fef2f3',
					'100': '#fee2e5',
					'200': '#fecacf',
					'300': '#fca5ae',
					'400': '#f9707e',
					'500': '#f04355',
					'600': '#dd2538',
					'700': '#be1c2d',
					'800': '#9a1a27',
					'900': '#7f1d27',
					'950': '#450a10',
					DEFAULT: '#be1c2d'
				}
			},
		},
	},
	plugins: [tailwindHamburgers],
	experimental: {
		optimizeUniversalDefaults: true
	}
}
