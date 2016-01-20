var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/entry.jsx',
  output: {
    filename: './static/bundle.js',
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
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?module&localIdentName=[path][name]---[local]---[hash:base64:5]!stylus-loader"),
      },
    ]
  },
  stylus: {
    use: [require('nib')()],
    import: ['~nib/lib/nib/index.styl'],
  },
}
