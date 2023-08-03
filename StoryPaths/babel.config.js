const tsconfig = require('./tsconfig.json');

const aliases = Object.keys(tsconfig.compilerOptions.paths).reduce(
  (acc, key) => {
    if (key === '*' || key === '@tests' || key === '@screens') {
      return acc;
    }
    return {
      ...acc,
      [key.slice(0, -2)]: tsconfig.compilerOptions.paths[key][0].slice(0, -2),
    };
  },
  {},
);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: aliases,
      },
    ],
  ],
};
