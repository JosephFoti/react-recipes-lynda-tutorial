module.exports = {
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '\\.(jpeg|jpg|png)$': '<rootDir>/src/utils/fileMock.js',
  },
  setupFiles: ['<rootDir>/src/specs/index.js'],
};
