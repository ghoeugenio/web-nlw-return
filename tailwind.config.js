module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					300: '#996dff',
					500: '#8257e6',
				},
			},
			borderRadius: {
				md: '4px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
