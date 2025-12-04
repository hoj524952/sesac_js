function gugudan(dan) {
    console.log(` ===${dan} 단===`)
    for(let i = 1; i <= 9; i++){
        console.log(`${dan} X ${i} = ${dan * i}`)
    }
}

const readline = require('readline-sync');

rl = readline;

console.log('여기1');

// rl 이라는 변수를 통해서 키보드 입출력이 가능해졌음

const input = rl.question('원하는 단을 입력하시오: ');
console.log('입력값: ', input);

gugudan(input);


console.log('여기2');

// 유니코드 지원 X