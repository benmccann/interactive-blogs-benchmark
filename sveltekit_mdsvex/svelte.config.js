import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
		}),
	],
	kit: {
		adapter: adapter(),
		prerender: {
			onError: 'continue'
		},
		trailingSlash: 'always',
		vite: {
			build: {
				minify: false
			}
		}
	}
};

export default config;
