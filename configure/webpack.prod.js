import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';


module.exports = {
    mode: 'production',
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, '../', 'build'),
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, '../', 'build').split('/').pop()], {
            root: path.resolve(__dirname, '../')
        })
    ],
    devtool: 'source-map'
};