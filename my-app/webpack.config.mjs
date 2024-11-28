import path from 'path'
import {fileURLToPath} from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import {readFileSync} from 'fs'

const packageJsonFile = readFileSync('./package.json')
const packageJson = JSON.parse(packageJsonFile)

// Workaround based on this https://iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d
const __dirname = path.dirname(
    fileURLToPath(import.meta.url), // get the resolved path to the file
) // return the name of the directory

const plugins = [
    new HtmlWebpackPlugin({
        inject: true,
        template: 'public/index.html',
        sentry_release_id: packageJson.version,
    }),
    new CopyWebpackPlugin({
        patterns: [
            {from: 'public/style.css', to: 'style.css'},
        ],
    }),
    new FaviconsWebpackPlugin('public/favicon.svg'),
]


export default {
    entry: './index.tsx',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /\.d\.ts$/],
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
            {test: /\.geojson$/, type: 'json'},
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                default: {
                    minChunks: 2,
                },
                styles: {
                    test: /\.(css|sass|scss)$/,
                    name: 'styles',
                    chunks: 'all',
                    minChunks: 2,
                },
            },
        },
    },
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    plugins,
    devServer: {
        open: false,
        server: 'https',
        historyApiFallback: true,
        allowedHosts: 'all',
    },
}
