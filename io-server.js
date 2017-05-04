
const io = require('socket.io')(80);

/*const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h1>Hi, node<h1>');
}).listen(port, host, ()=> {
    console.log('server was run');
  });
*/

var num = 1;

io.on('connection', function(socket) {
  console.log('connection: ' + num)
  num++;
})
