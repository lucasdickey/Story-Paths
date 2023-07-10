module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@util': './src/util',
        },
      },
    ],
    ['import-glob', {}],
  ],
};
