const path = require('path');
const {
    NODE_ENV = 'production',
} = process.env;

const nodeExternals = require('webpack-node-externals');

const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    entry: './src/app/index.ts',
    mode: NODE_ENV,
    watch: NODE_ENV === 'development',
    externals: [nodeExternals()],
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            'app': path.resolve('src/app'),
            'logger': path.resolve('src/logger')
        }
    },
    plugins: [
        new WebpackShellPlugin({
            onBuildEnd: ['yarn run:dev']
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
}
