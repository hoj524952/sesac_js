const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('나의 루트')
});

app.get('/products', (req, res) => {
    res.send('나의 상품')
})

app.get('/users', (req, res) => {
    res.send('나의 고객님');
})

app.post('/users', (req, res) => {
    res.send('나의 신규 고객 생성')
})

app.put('/users', (req, res) => {
    res.send('나의 고객 정보 수정');
})