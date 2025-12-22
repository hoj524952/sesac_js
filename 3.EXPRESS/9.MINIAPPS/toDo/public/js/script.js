document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 로딩 완료');

    async function getTodo(){
        const res = await fetch('/api/todos');
        const data = await res.json();

        // fetch('/api/todos')
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         renderTodos(data);
        //     });
        console.log(data);
        renderTodos(data);
    }

    getTodo();

    function renderTodos(todos) {
        const result = document.getElementById('todo-list');
        result.innerHTML = ``; // 기존에 있는 것을 지운다.

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = todo.todo;

            // if(todo.completed){
            //     li.classList.add('completed');
            // }
            // else {
            //     li.classList.remove('completed');
            // }
            
            li.classList.toggle('completed', todo.completed);
            
            result.appendChild(li);

            li.addEventListener('click', async () => {
                const res = await fetch(`/api/todo/${todo.id}/completed`, {method: `PUT`})
                const data = res.json();    
                if(data.success == 'true'){
                    getTodo();
                }
                else {
                    alert(`해당 항목은 찾을 수 없습니다.`);
                }
                
            })

            // 삭제 버튼도 추가 예정
            const deleteBtn = document.createElement('button');
            deleteBtn.textContext = `삭제`;
            deleteBtn.addEventListener('click', async (e) => {
                e.stopPropagation(); // 위에 토글까지 이 이벤트가 전파되는 것을 방지.
                const res = fetch(`/api/todo/${todo.id}`, { method: `DELETE` })
                    .then(getTodo());
            })
            li.appendChild(deleteBtn);
        })
    }



    // TODO: /api/todos를 불러온 json결과를 바탕으로 todo라는 키에 있는 값을 ol 아래에 li로 표현한다.

    // todo 추가

    const addBtn = document.getElementById('add-todo');
    addBtn.addEventListener('click', () => {
        const inputText = document.getElementById('new-todo').value;
        const text = inputText.trim();

        console.log(text);

        if(!text) return;

        fetch('/api/todo', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({todo:text})
        }).then(data =>{

        })
    });
    
});