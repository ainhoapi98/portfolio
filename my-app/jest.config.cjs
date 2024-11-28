const baseConfig = require('@tools/test-config/jest.react.app.config')

// Setup timezone for javascript Date
// Has to be done before the config is fed to jest
process.env.TZ = 'Europe/Berlin'

module.exports = {
    ...baseConfig,
    transformIgnorePatterns: [
        'node_modules/(?!((d3-)|(internmap)|([^/]*dnd)|(react-virtualized)|(preact|@preact/*)))',
    ],
    collectCoverageFrom: [
        'app/**/*.{js,jsx,ts,tsx}',
        '!app/**/*.test.{js,jsx,ts,tsx}',
        '!app/**/*.stories.{js,jsx,ts,tsx}',
        '!app/app.jsx',
        '!app/typescript/**/*.{js,jsx,ts,tsx}',
        '!app/**/messages.ts',
    ],
    coverageThreshold: {
        global: {
            statements: 0, // Current: 23.93% | Goal: 98
            branches: 0, // Current: 34.23% | Goal: 91
            functions: 0, // Current: 23.97% | Goal: 98
            lines: 0, // Current: 23.46% | Goal: 98
        },
    },
    moduleNameMapper: {
        '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/cssModule.js',
        '.+.\\/worker': '<rootDir>/__mocks__/workerMock.js',
        '.+.\\/feeds.worker': '<rootDir>/__mocks__/workerMock.js',
        '^__mocks__(.*)$': '<rootDir>/__mocks__$1',
    }
}
