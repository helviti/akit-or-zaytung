module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		safelist: [/^svelte-[\d\w]+$/]
	},
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
