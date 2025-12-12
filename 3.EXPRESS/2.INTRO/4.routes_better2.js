const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('나의 루트');
});

app.get('/products', (req, res) => {
    console.log(`상품분류: ${req.query.category}, 상품이름:${req.query.name}`);
    res.send('나의 상품');
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`나의 고객 ID는: ${req.params.id}입니다.`)
});

app.post('/users', (req, res) => {
    let newId = 12345;
    res.send(`나의 신규 고객님 생성: 신규 ID는 ${newId} 입니다.`)
})

app.put(`/users/:id`, (req, res) => {
    res.send(`나의 고객 정보 수정`)
})

app.delete(`/users/:id`, (req, res) => {
    res.send(`나의 고객 삭제`)
})

app.listen(PORT, () => {
    console.log(`Server is ready at http://127.0.0.1:${PORT}/`);
})