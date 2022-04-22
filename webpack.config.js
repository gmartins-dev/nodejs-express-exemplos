const path = require('path')
const NodemonPLugin = require('nodemon-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.js',
    target: 'node',
    mode: 'development',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new NodemonPLugin()
    ],
    externals: [
        nodeExternals()
    ]
}