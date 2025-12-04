const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.listen(3000);
server.on('connection', () => {
    console.log('TCP 연결이 시작되었습니다.');
});

server.on('request', (req, res) =>  {
    console.log('HTTP 요청이 시작되었습니다.');
    fs.readFile('example.txt', 'utf-8', (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain;'})
            res.end('파일 에러')
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/plain;'})
        res.end(data);
    })
});

