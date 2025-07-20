import type { Config } from 'jest';
import nextJest from 'next/jest';

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  collectCoverage: true,
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.*|@babel/runtime).+(js|jsx|ts|tsx|json)$',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default createJestConfig(config);
