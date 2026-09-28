import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { tailwindCssObfuscatorVite } from 'tailwindcss-obfuscator/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths({ ignoreConfigErrors: true }),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    tailwindCssObfuscatorVite({
      prefix: 'tw-',
    }),
  ],
  server: { port: 5173 },
})
