const http = require("http");
const router = require("./router/router.js");

const app = http.createServer((req, res) => {
  router(req, res);
});

module.exports = app;
