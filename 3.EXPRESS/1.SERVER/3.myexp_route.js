const http = require('http');

const myapp = {
    routes: [], // 이번엔 배열이 아니고 key, value를 탐색하기 좋은 자료구조인 object

    register: function register(route, handler) {
        this.routes[route] = handler;
    },

    // 요청 처리
    handleRequest(req, res) {
        const route = req.url;
        const handler = this.routes[route];

        if(handler) {
            handler(req, res);
        }
        else {
            res.statusCode = 404;
            res.end('Not Found');
        }
    }
}

function rootHandler(req, res) {
    console.log('사용자가 루트(/)에 방문');
    res.end('Welcome to my homepage');
}

function userHandler(req, res) {
    console.log('사용자가 /user에 방문');
    res.write('User 데이터를 프로세싱중입니다...');
    res.send('안녕하세요 사용자님...');
}

function adminHandler(req, res) {
    console.log('사용자가 /admin 관리자 페이지에 접속');
    res.write('Admin 페이지는 인증을 필요로 합니다');
    res.send('안녕히 가세요...');
}

myapp.register('/', rootHandler);
myapp.register('/user', userHandler);
myapp.register('/admin', adminHandler);

const server = http.createServer((req, res) => {
    myapp.handleRequest(req, res);
})

server.listen(3000, () => {
    console.log('서버 레디');
})