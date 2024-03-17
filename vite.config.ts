import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(), TanStackRouterVite()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
