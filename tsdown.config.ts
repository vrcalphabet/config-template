import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    main: 'src/main.ts',
  },
  // minify: true,
  dts: false,
  logLevel: 'silent',
  deps: {
    neverBundle: true,
  },
})
