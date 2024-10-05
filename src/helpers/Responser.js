class Responser {
  constructor(res) {
    this.res = res;
    this.statusCode = 200;
    this.headers = { "Content-Type": "application/json" };
  }

  status(code) {
    this.statusCode = code;
    return this;
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }

  json(data) {
    this.res.writeHead(this.statusCode, this.headers);
    this.res.end(JSON.stringify(data));
    return this;
  }
}

module.exports = Responser;
