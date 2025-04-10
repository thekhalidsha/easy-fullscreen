import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js', // Your entry file
  output: [
    {
      file: 'dist/index.cjs.js', // CommonJS output
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js', // ESM output
      format: 'esm',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    postcss({
      extract: false, // Set to false to bundle the CSS into the JS
      inject: true,   // Automatically inject CSS into the JS bundle
      modules: true,  // Enable CSS Modules (optional if you are using them)
    }),
    terser(), // Optional minification
  ],
  external: ['react', 'react-dom'], // Treat React as external
};
