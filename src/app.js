const http = require("http");
const router = require("./adapters/routes/router.js");

const app = http.createServer((req, res) => {
  router(req, res);
});

module.exports = app;
