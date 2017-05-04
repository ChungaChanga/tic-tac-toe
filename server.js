const host = '127.0.0.1';
const port = '8080';
const server = require('http').createServer(handler).
  listen(port, host, ()=> {
    console.log('server was run');
  });
const fs = require('fs');
const io = require('socket.io')(server);
const url = require('url');

/*const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1>Hi, node<h1>');
}).listen(port, host, ()=> {
    console.log('server was run');
  });
*/
var __dirname = '';
function handler (req, res) {
  console.log(req.url)
  fs.readFile(__dirname + 'index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(data);
  });
}

var num = 1;

io.on('connection', function(socket) {
  //console.log('connection: ' + num)
  //num++;
  socket.broadcast.send('new user');
})
