const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const rulesForJS = {
    rules: [
        {
            test: /\.js/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic'
                        }
                    ]
                ]
            }
        }
    ]
}
const rulesStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const rulesForTS = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node-modules/',
}
const rules = [rulesForJS, rulesForTS, rulesStyles]
module.exports = (env, argv) => {
    const { mode } = argv
    const isProduction = mode === 'production';

    return {
        //? Default value
        //entry:'./src/index.js',
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ],
        module: { rules },
        devServer: {
            open: true,
            port: 3000,
            // overlay: true,
            compress: true
        },
    }
}