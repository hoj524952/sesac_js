const express = require('express');
const morgan = require('morgan');


const app = express();
const PORT = 3000;

let todos = []; // 여기에 사용자가 입력한 todo가 담길 곳...
let idCounter = 1;

app.use(express.static('public'));
app.use(express.json()); // FE에서 보내온 데이터를 json으로
// 보냈다면... 그걸 파싱해서 req.body에 담아줌
app.use(express.urlencoded({extended: false})) // FE 에서 보낸
// 데이터가 urlencoded 로 보냈다면.. 그걸 파싱해서 req.body에 담아줌...
app.use(morgan('dev'));


// 라우트 설계 -->
app.get('/api/todo', (req, res) => {
    console.log('todo 달라고 요청함');
    res.json(todos);
});

app.post('/api/todo', (req, res) => {
    console.log('todo 생성해달라고 요청함')
    console.log(`요청의바디: ${JSON.stringify(req.body)}`);
    const newTodo = {id: idCounter++, todo: req.body.todo, completed: false};

    console.log(newTodo);
    todos.push(newTodo);
    res.json({id: newTodo.id});
})
app.delete('/api/todo', (req, res) => { // 입력 인자를 ? 쿼리파라미터로 받을지 URL 파라미터를 받을지
    // URL 파라미터를 받을지 (잘 모르면 지금 케이스에서는...)
    console.log('todo 삭제해달라고 요청함');
    // id를 받아서, 그 id를 가진 항목을 삭제한다.
    // todos.filter를 통해서 비교..

    res.json({success: true}); // 다양한 양식일뿐... 결론적으로 한 타입으로 통일...
})
app.put('/api/todo', (req, res) => {
    console.log('todo 수정해달라고 요청함');
})


// 라우트 끝 <--

app.listen(PORT, () => {
    console.log('Server is ready at http://localhost:3000');
})