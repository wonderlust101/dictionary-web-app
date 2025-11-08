import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg?react',
        })
    ],
    base: "/dictionary-web-app/",
    optimizeDeps: {
        esbuildOptions: { target: 'es2020' }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    server: {
        hmr: { protocol: 'ws', host: 'localhost', port: 5173 }
    }
})