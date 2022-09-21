const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: "localhost",
    // 是否自动打开浏览器
    open: false,
    // 是否开启https
    https: false,
    // 配置跨域
    proxy: {
      // /dev-api 代理名称 process.env.VUE_APP_BASE_API === "/dev-api"
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ''
        }
      }
      // "/dev1-api" : {
      //   // 跨域的地址
      //   target : "http://localhost:3000",
      //   // 开启跨域
      //   changeOrigin : true,
      //   // 路径重写
      //   pathRewrite : {
      //     "^/dev1-api" : ''
      //   }
      // }
    }
  },
  // 关闭eslint
  lintOnSave: false,
});
