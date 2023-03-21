const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://naveropenapi.apigw.ntruss.com/recog/v1/stt",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
