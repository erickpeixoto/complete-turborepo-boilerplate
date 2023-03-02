const path = require("path");

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  resetMocks: true,
  coveragePathIgnorePatterns: [],
  testMatch: ["**/**/*.test.(ts|tsx)"],
  coverageThreshold: null,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "@src/(.*)": fromRoot("packages/ui/$1"),
  },
};
