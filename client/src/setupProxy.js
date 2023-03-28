const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://c47a-220-95-3-215.jp.ngrok.io",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
