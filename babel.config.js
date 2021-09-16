module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-hot-loader/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['@babel/transform-runtime'],
  ],
};
