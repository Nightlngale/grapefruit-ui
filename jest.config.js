const { defaults } = require('jest-config');

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: '<rootDir>/tsconfig.json',
      babelConfig: true,
    },
  },
  preset: 'ts-jest',
  modulePaths: ['node_modules', ''],
  modulePathIgnorePatterns: ['<rootDir>/dist/', 'index.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  rootDir: '',
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'html', 'cobertura'],
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx}'],
};
