import babel from 'rollup-plugin-babel';

export default {
  input: 'main.js',
  output: {
    format: 'es',
    file: './dist/wedding.esm.js',
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          'env',
          {
            targets: {
              browsers: [
                'IE >= 8',
              ],
            },
            loose: true,
            modules: false,
          },
        ],
        'flow',
      ],
      plugins: [
        'transform-object-assign',
        'transform-flow-strip-types',
      ],
    }),
  ],
};
