import { defineConfig, Options } from 'tsup';

const config: Options = {
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  clean: true,
  shims: true,
  skipNodeModulesBundle: true,
  minify: 'terser',
  outDir: 'dist'
};

export default defineConfig(config);
