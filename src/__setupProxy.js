import { createProxyMiddleware } from "http-proxy-middleware";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ibk.co.kr',
      changeOrigin: true
    })
  )
}