const HtmlWebpackPlugin = require ('html-webpack-plugin');
const { resolve } = require('path');
// const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require ('webpack-bundle-analyzer');


module.exports= {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, "dist"),
        filename: 'main.bundle.js'
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        // new MiniCssExtractPlugin ({
        //     filename: '[name].[contenthash].css'
        // }),
        new CopyPlugin({
            patterns: [
              {
                from: "src/",
                to: "src/",
                toType: "dir",
              },
            ],
          }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        
    ],
    module: { 
        rules: [
            {
            test: /\.html$/,
            use: [{
            loader: "html-loader",
         },
        ],
     },
        ],
        
        //     { test: /\\.css$/,
        //         use: [MiniCssExtractPlugin.loader, "css-loader"]
        //     },
        //     { test: /\\.s[ac]ss$/i,
        //         use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        //     },
        // ]
    },
    devServer: {
        port: 4200
    }
}