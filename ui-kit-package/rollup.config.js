import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  // CSS bundle
  {
    input: 'src/styles.css',
    output: {
      file: 'dist/style.css',
    },
    plugins: [
      postcss({
        config: { path: './postcss.config.mjs' },
        extract: true,
        minimize: true,
      }),
    ],
  },
  // JavaScript bundles
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        outDir: 'dist/types',
        declaration: true,
        declarationDir: 'dist/types',
      }),
    ],
    external: [
      'react', 
      'react-dom',
      'tailwindcss'
    ],
  },
]; 