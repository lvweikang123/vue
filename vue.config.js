module.exports = {
  lintOnSave: false,
  publicPath: './',

  devServer: {
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:5000',
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          // '^/api': '/api'   //http://127.0.0.1:5000/api/login
          '^/api': ''   //http://127.0.0.1:5000/login
        }
      }
    }
  }
};
