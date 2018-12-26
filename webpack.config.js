var path = require('path')
var webpack = require('webpack')

module.exports = env => {
  // console.log('Production: ', (env.production||"undefined")); // true
  // console.log('Target: ' + (env.target||"undefined"));

  console.log('Compiling...')

  var fileName

  if (env && env.production) {
    fileName = 'firestate.min.js'
  } else {
    fileName = 'firestate.dev.js'
  }

  return {
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: fileName,
      library: 'fireState',
      libraryTarget: 'umd',
      globalObject: "typeof self !== 'undefined' ? self : this"
    },
    devServer: {
      contentBase: path.join(__dirname, '')
    },
    devtool: 'sourcemap',
    /* externals: {
      fs: 'commonjs fs'
    }, */ // Hopefully not needed
    mode: (env && env.production) ? 'production' : 'development',
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: !!((env && env.production))
      })
    ]
  }
}
