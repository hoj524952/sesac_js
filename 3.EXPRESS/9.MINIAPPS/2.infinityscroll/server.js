const express = require('express');
const figlet = require('figlet');

// 가상 데이터 생성
const data = Array.from({length: 100}, (_, i) => `Item ${i + 1}`);
// console.log(data);

const PORT = 3000;
const app = express();

app.use(express.static('public'));

function myLogger(req, res, next) {
    const now = new Data().toISOString();
    const method = req.method;
    const urlpath = req.urlpath;
    console.log(`[${now}]`);
    next();
}

app.use(myLogger);

// /api/items?start=5&end=20;
app.get('/api/items', (req, res) => {
    // 1. 변수를 선언하고 사용자의 입력을 받아온다.
    const start = 0;
    const end = 0;
    console.log(start, end);

    // 2. 이 번호에 해당하는걸 우리 배열에서 골라낸다.

    // 3. 그 내용을 전달한다.
    res.json(data);
})

app.listen(PORT, () => {
    // console.log(SESAC);
    figlet("SESAC", (err,data) => { if(!err) console.log(data);});
    console.log(`server is on http://127.0.0.1:${PORT}`);
})