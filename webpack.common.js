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

 // Article -> Ryzan
 new HtmlWebpackPlugin({
  template: './src/articles/ryzan.html',
  filename: './articles/ryzan.html'
}),

 // Article -> Podolsk
 new HtmlWebpackPlugin({
  template: './src/articles/podolsk.html',
  filename: './articles/podolsk.html'
}),

 // Article -> Shatura
 new HtmlWebpackPlugin({
  template: './src/articles/shatura.html',
  filename: './articles/shatura.html'
}),

 // Article -> Kostroma
 new HtmlWebpackPlugin({
  template: './src/articles/kostroma.html',
  filename: './articles/kostroma.html'
}),

 // Article -> Ivanovo
 new HtmlWebpackPlugin({
  template: './src/articles/ivanovo.html',
  filename: './articles/ivanovo.html'
}),

 // Article -> Kolomna
 new HtmlWebpackPlugin({
  template: './src/articles/kolomna.html',
  filename: './articles/kolomna.html'
}),

 // Article -> Zelenograd
 new HtmlWebpackPlugin({
  template: './src/articles/zelenograd.html',
  filename: './articles/zelenograd.html'
}),

 // Article -> Tula
 new HtmlWebpackPlugin({
  template: './src/articles/tula.html',
  filename: './articles/tula.html'
}),

 // Article -> Tver
 new HtmlWebpackPlugin({
  template: './src/articles/tver.html',
  filename: './articles/tver.html'
}),

 // Article -> Vereya
 new HtmlWebpackPlugin({
  template: './src/articles/vereya.html',
  filename: './articles/vereya.html'
}),

 // Article -> Zaraysk
 new HtmlWebpackPlugin({
  template: './src/articles/zaraysk.html',
  filename: './articles/zaraysk.html'
}),

 // Article -> Pereslavl
 new HtmlWebpackPlugin({
  template: './src/articles/pereslavl.html',
  filename: './articles/pereslavl.html'
}),

 // Article -> Voronezh
 new HtmlWebpackPlugin({
  template: './src/articles/voronezh.html',
  filename: './articles/voronezh.html'
}),

 // Article -> Yaroslavl
 new HtmlWebpackPlugin({
  template: './src/articles/yaroslavl.html',
  filename: './articles/yaroslavl.html'
}),

 // Article -> Piter
 new HtmlWebpackPlugin({
  template: './src/articles/piter.html',
  filename: './articles/piter.html'
}),

 // Article -> Bor
 new HtmlWebpackPlugin({
  template: './src/articles/bor.html',
  filename: './articles/bor.html'
}),

 // Article -> Korolev
 new HtmlWebpackPlugin({
  template: './src/articles/korolev.html',
  filename: './articles/korolev.html'
}),

 // Article -> Vibrat
 new HtmlWebpackPlugin({
  template: './src/articles/vibrat.html',
  filename: './articles/vibrat.html'
}),

 // Article -> Family
 new HtmlWebpackPlugin({
  template: './src/articles/family.html',
  filename: './articles/family.html'
}),

 // Article -> Children
 new HtmlWebpackPlugin({
  template: './src/articles/children.html',
  filename: './articles/children.html'
}),

 // Article -> Chem
 new HtmlWebpackPlugin({
  template: './src/articles/chem.html',
  filename: './articles/chem.html'
}),

 // Article -> Apps
 new HtmlWebpackPlugin({
  template: './src/articles/apps.html',
  filename: './articles/apps.html'
}),

 // Article -> Ideal
 new HtmlWebpackPlugin({
  template: './src/articles/ideal.html',
  filename: './articles/ideal.html'
}),

 // Article -> Winter
 new HtmlWebpackPlugin({
  template: './src/articles/winter.html',
  filename: './articles/winter.html'
}),

 // Article -> Vse
 new HtmlWebpackPlugin({
  template: './src/articles/vse.html',
  filename: './articles/vse.html'
}),

 // Article -> Extrim
 new HtmlWebpackPlugin({
  template: './src/articles/extrim.html',
  filename: './articles/extrim.html'
}),

 // Article -> Shopping
 new HtmlWebpackPlugin({
  template: './src/articles/shopping.html',
  filename: './articles/shopping.html'
}),

 // Article -> Festivali
 new HtmlWebpackPlugin({
  template: './src/articles/festivali.html',
  filename: './articles/festivali.html'
}),

 // Article -> Base
 new HtmlWebpackPlugin({
  template: './src/articles/base.html',
  filename: './articles/base.html'
}),

 // Article -> Summer
 new HtmlWebpackPlugin({
  template: './src/articles/summer.html',
  filename: './articles/summer.html'
}),

 // Article -> Moskva
 new HtmlWebpackPlugin({
  template: './src/articles/moskva.html',
  filename: './articles/moskva.html'
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