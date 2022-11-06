module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@navigation': './src/navigation',
            '@components': './src/components',
            '@containers': './src/containers',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@store': './src/store',
            '@assets': './src/assets',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
