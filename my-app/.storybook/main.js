// .storybook/main.js
const path = require('path')

module.exports = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx|mdx)'], // Include .ts/.tsx stories
  addons: [
    '@storybook/addon-essentials', // Essential Storybook addons (controls, actions, etc.)
    '@storybook/addon-interactions', // Interactions addon
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-webpack5', // Use Webpack 5
  webpackFinal: async config => {
    // Add TypeScript support
    config.module.rules.push({
      test: /\.(ts|tsx)$/, // Match .ts and .tsx files
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', // Babel preset for React
              '@babel/preset-typescript', // Babel preset for TypeScript
            ],
            plugins: [
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-optional-chaining',
            ],
          },
        },
        {
          loader: 'ts-loader', // Use ts-loader for TypeScript files
          options: {
            transpileOnly: true, // Only transpile, skip type checking (optional if you're using another TS checker like `fork-ts-checker-webpack-plugin`)
          },
        },
      ],
      exclude: /node_modules/, // Exclude node_modules
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../app/components'),
      hooks: path.resolve(__dirname, '../app/hooks'),
      styles: path.resolve(__dirname, '../app/styles'),
      types: path.resolve(__dirname, '../app/types'),
      storybook: path.resolve(__dirname, '../.storybook'),
      decorators: path.resolve(__dirname, '../.storybook/decorators'),
    }

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../app'),
    ]

    config.resolve.extensions = [
      ...config.resolve.extensions,
      '.ts',
      '.tsx',
      '.js',
    ]

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../'),
    })
    config.stats = 'verbose'

    return config
  },
}
