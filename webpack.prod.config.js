const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        // publicPath: 'http://some-cdn' // asset path will be http://some-cdn/todo.jpg // https://unsplash.com/s/photos/todo
        publicPath: ''
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all', // used to split the common libs if that exceeds 30kb before minification
            minSize: 3000 // using this option we can change the default 30kb limit
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.(ttf)$/,
            //     type: 'asset' // if file size > than 8kb then asset/resource used if less then asset/inline used
            // },
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset/inline' // new file not be created and asset will be converted base64 and added to webpack bundle file
            // },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset',
            //     parser: { // custom condition for asset module
            //         dataUrlCondition: {
            //             maxSize: 3 * 1024 
            //         }
            //     }
            // },
            {
                test: /\.(txt)$/,
                type: 'asset/source' // read the file and return the content as javascript string
            },
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(hbs)$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        // new TerserPlugin(), // As production mode this plugin included by default
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // clean all file relative to the output mentiond path
                path.join(process.cwd(), 'build/**/*') // used to clean file outside of output mentiond path
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Hello world',
            filename: 'hellow-world.html',
            chunks: [ // it will decide which output bundle to include. Also we can specify multiple chunks
                'hello-world' // This chunk name specified in entry object
            ],
            // filename: 'sub/custom_file.html', // used to provide custom html file name
            // meta: {
            //     description: 'some description'
            // },
            template: 'src/page-template.hbs', // to use our own template
            description: 'hello wrold description',
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: 'Kiwi',
            filename: 'kiwi.html',
            chunks: [ // it will decide which output bundle to include. Also we can specify multiple chunks
                'kiwi' // This chunk name specified in entry object
            ],
            // filename: 'sub/custom_file.html', // used to provide custom html file name
            // meta: {
            //     description: 'some description'
            // },
            template: 'src/page-template.hbs', // to use our own template
            description: 'Kiwi description',
            minify: false
        })
    ]
}