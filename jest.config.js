// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/out/**",
    "!<rootDir>/**/types/**",
    "!<rootDir>/jest.config.*",
  ],
  coverageDirectory: "coverage",
};

module.exports = createJestConfig(customJestConfig);
