const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // компоненты
    new HtmlWebpackPlugin({
      template: './src/components.html',
      filename: './components.html'
    }),

    // Article -> Tarusa
    new HtmlWebpackPlugin({
      template: './src/articles/tarusa.html',
      filename: './articles/tarusa.html'
    }),

    // Article -> Blogers
    new HtmlWebpackPlugin({
      template: './src/articles/blogers.html',
      filename: './articles/blogers.html'
    }),

    // Article -> Nizhny
    new HtmlWebpackPlugin({
      template: './src/articles/nizhny.html',
      filename: './articles/nizhny.html'
    }),

 // Article -> Sergiev
 new HtmlWebpackPlugin({
  template: './src/articles/sergiev.html',
  filename: './articles/sergiev.html'
}),

 // Article -> Suzdal
 new HtmlWebpackPlugin({
  template: './src/articles/suzdal.html',
  filename: './articles/suzdal.html'
}),

 // Article -> Klin
 new HtmlWebpackPlugin({
  template: './src/articles/klin.html',
  filename: './articles/klin.html'
}),

 // Article -> Spas
 new HtmlWebpackPlugin({
  template: './src/articles/spas.html',
  filename: './articles/spas.html'
}),

 // Article -> Vologda
 new HtmlWebpackPlugin({
  template: './src/articles/vologda.html',
  filename: './articles/vologda.html'
}),

 // Article -> Karelia
 new HtmlWebpackPlugin({
  template: './src/articles/karelia.html',
  filename: './articles/karelia.html'
}),


    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}