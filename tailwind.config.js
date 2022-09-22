/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				dark: 'rgba(24, 16, 16, 0.75)',
				primary: '#DA342C',
				secondary: '#FF6600',
				success: '#00915F',
			},
		},
	},
	plugins: [],
};
