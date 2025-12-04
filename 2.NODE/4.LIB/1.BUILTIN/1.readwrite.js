// 파일 입출력을 해야함...

// const fs = require('fs');

// function 끝났을때(err, data) {
//     console.log('끝');
//     console.log('error에는 뭘 담음?', error);
//     console.log('success에는 뭘 담음?', success);
// }

// fs.readFile('example.txt', 끝났을때);

// const content = "여기에는 내가 쓰고 싶은 내용 작성";

// fs.writeFile('exmaple2.txt', content, 'utf-8', (err) => {
//     if(err){
//     console.log('파일 쓰기에 실패했습니다.');
//     }
//     else {
//         console.log("파일 쓰기에 성공");
//     }
// });

// console.log("난 언제호출될까?");

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err,data) => {
    console.log('일단 끝 - 결과가 성공/실패 건 일단 끝');
    if(err) {
        console.log('파일 읽기에 실패했습니다. ', err.message);
    }
    else {
        console.log(data);
    }
});

console.log('내가 더 먼저 끝');

const content = "여기에는 쓰고 싶은 내용 작성";

fs.writeFile('example2.txt', content, 'utf-8', (err) => {

    if(err){
        console.log('파일쓰기에 실패');
    }
    else{
        console.log('파일 쓰기에 성공');
    }
});

console.log('이건 언제호출?');