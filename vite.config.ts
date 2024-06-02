import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	return {
		base: './',
		server: {
			host: '0.0.0.0',
			port: 3000
		},

		build: {
			outDir: 'build',
		},
		plugins: [react()],
	}
});
