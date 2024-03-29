var webpack = require('webpack');

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './app/app.jsx'
  ],
  externals: {
      jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
      })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/Main.jsx',
        Nav: 'app/components/Nav.jsx',
        RouteHandler: 'app/components/RouteHandler.jsx',
        Portfolio: 'app/components/Portfolio.jsx',
        Home: 'app/components/Home.jsx',
        Travelbug: 'app/components/Travelbug.jsx',
        Circles: 'app/components/Circles.jsx',
        Weather: 'app/components/Weather.jsx',
        PathHop: 'app/components/PathHop.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
