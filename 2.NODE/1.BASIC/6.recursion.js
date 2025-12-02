// 재귀함수

function myFunction() {
    console.log("hello");
    myFunction();
}

function factorial(n) {
    if (n == 1){ 
        return n;
    }
    result = n * factorial(n-1);
    return result;
}

function 


/* myFunction(); */
console.log(factorial(5));
console.log(factorial(20));
console.log(factorial(43));
