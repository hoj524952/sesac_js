const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    let requestTime = Date.now();
    console.log(`[LOGGING] ${requestTime}`);
    console.log(`[LOGGING] ${Date(requestTime).toString()}`)

    req.this_is_my_time = Date(requestTime).toString();

    next();
});

app.use((req, _, next) => {
    console.log(`2. 나는 두 번째 미들웨어...`);
    console.log(`사용자 왔다감: `, req.socket.remoteAddress);
    next();

});

app.use((_req, _res, next) => {
    console.log('3.나는 세번째 미들웨어... (나는 req/res 둘다 안보고 안처리하는애...');
    next();
    
});


app.get('/', (req, res) => {
    console.log('4. 홈 라우트에 접속');
    console.log(`혹시.. 앞에 애가 로깅하면서 시간 보내줬나?? ${req/this_is_my_time}`);
    res.send('웰컴투 마이홈');
})

app.get('/users', (req, res) => {
    console.log('사용자 라우트에 접속');
    res.send('웰컴투 사용자들의 홈');
})

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
    console.log('5. 최종 오류처리 미들웨어:', err);
    res.status(500).send('서버 오류가 발생했습니다.');
})

app.listen(PORT, () => {
    console.log(`Server is ready, http://127.0.0.1:${PORT}`);
});

