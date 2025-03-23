import { sveltekit } from '@sveltejs/kit/vite';
import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteInspector()
  ]
});