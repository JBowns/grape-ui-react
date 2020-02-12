const path = require('path');
module.exports = {
  entry: path.join(process.cwd(), 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [],
  resolve: {
    modules: ['node_modules'],
    alias: {
        src: path.join(process.cwd(), 'src')
    }
  }
};
