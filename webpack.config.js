module.exports = {
  module: {
    loaders: [
      { test: /\\.jsx?$/, loader: 'babel', exclude: ['node_modules'] },
    ]
  },
  resolve: {
    extensions: ['', 'js', 'jsx'],
    modulesDirectories: ['node_modules', 'bower_components', 'shared'],
    root: '/shared/vendor/modules',
    alias: {
      react: './vendor/react-master',
      config$: './configs/app-config.js',
    },
  }
}