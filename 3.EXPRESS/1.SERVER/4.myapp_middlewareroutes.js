const http = require('http');

const myapp = {
    middlewares: [], // 글로벌 미들웨어들은 여기에 등록
    routes: {}, // 개별 라우트 및 핸들러는 여기에 등록

    // 전역 미들웨어를 등록하는 함수
    use(fn) {
        this.middlewares.push(fn);
    },

    // 라우트 등록하는 함수
    register(route, handler) {
        this.routes[route] = handler;
    },

    // 요청을 처리하는 함수
    handleRequest(req, res) {
        // 요청을 받아서. 어디 요청했는지 확인.
        
        const route = req.url;
        const handler = this.routes[route];

        // 라우터가 없으면?
        if (!handler) {
            res.statusCode = 404;
            return res.end(`Not Found: ${route}`);
        }
        // 미들웨어가 있으면, 미들웨어부터 처리한다.
        const context = {req, res, route};
        const stack = [...this.middleware, handler]; // 스프레드 연산자로
        const index = 0;

        // 라우터 처리한다. (요청한 라우트가 없으면 404 반환한다.)
        const next = () => {
            if()

            const fn = stack[index++];
            if(fn) {
                fn(context, next);
            }
        };

        next(); // 첫 번째 미들웨어(핸들러) 부터 실행을 시작함...

    }
}