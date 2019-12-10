module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',

            }
        },
    },
  //配置完这里要跑一遍npm install webpack-dev-server -D
  devServer: {

    proxy: {
      '/api': {
        target: 'http://localhost:4001/', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  }


