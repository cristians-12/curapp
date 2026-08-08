module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(\\.pnpm|(jest-)?react-native|@react-native(-community)?|@react-navigation|react-redux|@reduxjs/toolkit|redux-saga|react-native-vector-icons|immer)/)',
  ],
};
