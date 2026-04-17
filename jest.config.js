module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@env$': '<rootDir>/__mocks__/envMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-screens|react-native-safe-area-context|@react-native-async-storage|@reduxjs|react-redux|redux-persist|immer|@gorhom|react-native-reanimated|react-native-gesture-handler|react-native-linear-gradient|react-native-worklets|react-native-permissions|react-native-mask-input|react-native-svg|react-native-svg-circle-country-flags)/)',
  ],
};
