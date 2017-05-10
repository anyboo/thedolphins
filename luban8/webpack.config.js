const {
    resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
    entry: {
        vendor: './src/vendor.js',
        index: './src/main.js'
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
        chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.dev ? '/assets/' : publicPath
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            }, {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        root: resolve(__dirname, 'src'),
                        attrs: ['img:src', 'link:href']
                    }
                }]
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            /*
                       {
                           test: /\.css$/,
                           //loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                           use: ['style-loader', 'css-loader', 'postcss-loader']
                       },
                      {
                         test: /favicon\.png$/,
                         use: [{
                           loader: 'file-loader',
                           options: {
                             name: '[name].[ext]?[hash]'
                           }
                         }]
                       },*/
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: /favicon\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src')
        }
    },
    devServer: {
        host: '0.0.0.0',
        port: 8010,
        proxy: {
            '/api/': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/assets/' : publicPath).pathname
        }
    },
    devtool: options.dev ? 'module-source-map' : '#source-map'
})
