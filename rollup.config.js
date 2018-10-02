import svelte from 'rollup-plugin-svelte';

export default {
	input: './index.js',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs'
		}
	],
	plugins: [
		svelte({
			include: '*.html'
		})
	],
	external: [
		'dlv',
		'fuse.js',
		'lodash/chunk',
		'lodash/uniq',
		'svelte-feather-icon'
	]
};

