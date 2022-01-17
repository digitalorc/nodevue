const http = require('http');
//http server 
// http.IncomingMessage: HTTP 서버의 요청 메시지, Readable Stream
// http.ServerResponse : HTTP 서버의 응답 클래스
// event: 'request', 'connection', 'close'

// http client
// http.ClientRequest: HTTP 클라이언트 요청 메세지
// http.IncomingMessage: HTTP 서버의 응답 메시지, Readable Stream

// const server = http.createServer((req,res) => {
 
//   res.end('Hello world');
// });


// server.on('request', (req, res) => {console.log(req.headers['user-agent']);});

// server.on('connection', socket => {console.log('client is connected!'); });

// server.on('close', ()=> { console.log('connection was closed!!'); });

// server.listen(7000);

const fs = require('fs');



const server = http.createServer((req, res) => {
  console.log('method: ',req.method);

  fs.access('../public/images/a.jpg', err => {
    if(err) {
      res.statusCode = 404;
      res.end();
      return;
    }
  });

  fs.readFile('../public/images/a.jpg', (err, data) => {
    res.end(data);
  });

}).listen(7000);

