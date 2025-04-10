import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser'; // Optional: for minification

export default {
  input: 'src/index.js', // Adjust to your entry point if it's different
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
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    terser(), // Optional: minify the code
  ],
  external: ['react', 'react-dom'], // Ensure React is treated as an external dependency
};
