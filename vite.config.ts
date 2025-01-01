import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            components: '/src/components',
            features: '/src/features',
            shared: '/src/shared',
            storage: '/src/storage',
            pages: '/src/redux',
        },
    },
});
