/*
 * @Descripttion:
 * @version:
 * @Author: yuhj
 * @Date: 2022-05-26 15:29:13
 */
module.exports = {
  // 保存代码时的语法检查
  lintOnSave: false,
  pages: {
    index: {
      // 修改入口文件
      entry: 'src/main.js',
    },
  },
  // 开启代理服务器(方式一)
  devServer: {
    proxy: 'http://localhost:5000',
  },
  // 开启代理服务器(方式二)
  // devServer: {
  //   proxy: {
  //     '/xiaojin': {
  //       target: 'http://localhost:5000', // 请求服务器的地址
  //       pathRewrite: {
  //         // 路径重写，修改代理服务器的地址变成请求服务器的正确地址，使用正则
  //         '^/xiaojin': '',
  //       },
  //       ws: true, // 开启webScoket，不写也行，默认开启
  //       changeOrigin: true, // 不写也行，默认开启,true表示端口号和去请求服务器一致，false则使用原本的端口号
  //     },
  //     // 可以灵活配置多个代理
  //     '/demo': {
  //       target: 'http://localhost:5001', // 请求服务器的地址
  //       pathRewrite: {
  //         // 路径重写，修改代理服务器的地址变成请求服务器的正确地址，使用正则
  //         '^/demo': '',
  //       },
  //       ws: true, // 开启webScoket，不写也行，默认开启
  //       changeOrigin: true, // 不写也行，默认开启,true表示端口号和去请求服务器一致，false则使用原本的端口号
  //     },
  //   },
  // },
};
