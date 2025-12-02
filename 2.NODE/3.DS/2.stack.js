class Stack {
    constructor() {
        this.stack = {}; // 스택을 저장할 공간
        this.count = 0; // 스택 현재 크기
    }

    push(element) {
        this.stack[this.count] = element;
        this.count++;
    }

    pop() {
        if(this.count == 0){
            return "더 가져갈 것 없음....."
        }
        this.count--;
        const result = this.stack[this.count];
        // 메모리 leak이 발생할 수 있음...
        //  delete this.stack[this.count];
        return result;
    }

    size() {
        return this.count;
    }
}

const myStack = new Stack();

// myStack.push();

console.log(myStack.size());
myStack.push("초록색");
myStack.push("노란색");
myStack.push("주황색");
myStack.push("빨간색");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());


