const path = require('path');

module.exports = {
    context: __dirname,
    entry: path.resolve(__dirname, 'src/index'),
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        minimize: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html2js-loader',
                    options: {}
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
