const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('나의 루트');
});

app.get('/product', (req, res) => {
    res.send('나의 상품');
})

app.get('/user', (req, res) => {
    res.send('고객');
});

app.get('/user/create', (req, res) => {
    res.send('나의 신규 고객 생성');
});

app.get('/user/modify', (req, res) => {
    res.send('나의 고객 정보 수정');
});

app.get('/user/delete', (req, res) => {
    res.send('나의 고객 삭제');
});

app.listen(PORT, () => {
    console.log(`Server is ready at http://127.0.0.1:${PORT}/`)
})