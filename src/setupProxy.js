const proxy =require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy.createProxyMiddleware("/api1", {  //api triggers proxy to run, whenever meet the api1, start using proxy
      target: "https://api.plos.org/",  //destination origin
      changeOrigin: true, //true set request header "host" value as destination address(localhost:3000) // false set request header "host" value as current address(locahost:3000) in default, changeOrigin is false, generally, we'd like to change it to true
      pathRewrite: {"^/api1": ""},//delete to trigger, made real address 
    })
   ,
    proxy.createProxyMiddleware("/api2", {
      target: "https://tools.learningcontainer.com",
      changeOrigin: true,
      pathRewrite: {"^/api2": ""},
    })
    ,
    proxy.createProxyMiddleware("/api3", {
      target: "https://ibk.co.kr",
      changeOrigin: true,
      pathRewrite: {"^/api3": ""},
    })
  )
}