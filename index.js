var httpModule = require('./bin/http-module');
var http = require('http');

httpModule.port = 8180;
httpModule.host = '127.0.0.1';

http.createServer(httpModule.handleRequest).listen(httpModule.port,httpModule.host);