module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		safelist: [/^svelte-[\d\w]+$/]
	},
	theme: {
		extend: {
			colors: {
				isabelline: '#F3EEF0'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
