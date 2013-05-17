var httpProxy = require('http-proxy');

var options = {
  hostnameOnly: true,
  router: {
    //"localhost": "127.0.0.1:8080",
    "localhost": "127.0.0.1:8000"
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);