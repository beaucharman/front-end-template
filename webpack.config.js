var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: './app/entry.jsx',
  output: {
    filename: './static/bundle.js',
    publicPath: '/',
  },
  plugins: [
    new ExtractTextPlugin('./static/app.css', {
      allChunks: true,
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&localIdentName=[name]---[local]---[hash:base64:5]!stylus-loader'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?name=[name].[ext]&limit=8192&path=static',
      },
    ]
  },
  stylus: {
    use: [
      require('nib')(),
      require('rupture')(),
    ],
    import: [
      '~nib/lib/nib/index.styl',
      '~rupture/rupture/index.styl',
      path.join(path.join(__dirname, 'app') + '/variables.styl'),
    ],
  },
}
