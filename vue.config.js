module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  // configureWebpack: {
  //   optimization: {
  //     runtimeChunk: 'single',
  //     splitChunks: {
  //       chunks: 'all',
  //       maxInitialRequests: Infinity,
  //       minSize: 0,
  //       cacheGroups: {
  //         vendor: {
  //           test: /[\\/]node_modules[\\/]/,
  //           name(module) {
  //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  //             return `npm.${packageName.replace('@', '')}`;
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  // configureWebpack: {
  //   optimization: {
  //     splitChunks: {
  //       chunks: 'async',
  //       minSize: 30000,
  //       minRemainingSize: 0,
  //       maxSize: 0,
  //       minChunks: 1,
  //       maxAsyncRequests: 6,
  //       maxInitialRequests: 4,
  //       automaticNameDelimiter: '~',
  //       cacheGroups: {
  //         defaultVendors: {
  //           test: /[\\/]node_modules[\\/]/,
  //           priority: -10
  //         },
  //         default: {
  //           minChunks: 2,
  //           priority: -20,
  //           reuseExistingChunk: true
  //         }
  //       }
  //     }
  //   }
  // }
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
}