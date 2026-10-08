import { defineConfig } from 'vite';

// Port dev server diikuti dari env PORT yang diberikan `vercel dev`,
// supaya proxy vercel bisa mendeteksi server (default vite selalu 5173).
const port = process.env.PORT ? Number(process.env.PORT) : undefined;

export default defineConfig({
    server: port ? { port, strictPort: true } : {},
});
