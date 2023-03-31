const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://f06b-220-95-3-215.jp.ngrok.io",
      // target:
      //   "http://ec2-13-125-205-181.ap-northeast-2.compute.amazonaws.com:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
