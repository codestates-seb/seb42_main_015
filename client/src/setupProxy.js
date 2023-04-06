const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "https://ba6b-59-0-146-50.jp.ngrok.io",
      target:
        "http://ec2-43-201-114-5.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
