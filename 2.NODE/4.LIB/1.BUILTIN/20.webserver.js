const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type' : 'text/plain'});

    const ip = req.socket.remoteAddress;
    console.log('접속자를 추적했음: ', ip);

    fs.readFile('index.html', 'utf-8', (err, data) => {
        if(err) {
            console.log('에러');
            res.writeHead(500, {'Content-Type' : 'text/html'});
            res.end('알 수 없는 오류');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    })
});

server.listen(3000);