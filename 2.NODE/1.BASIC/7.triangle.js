function leftTriangle(num_of_rows) {
    for(let i=1; i <= num_of_rows; i++)
    {
        console.log("*".repeat(i));
    }
}

function rightTriangle(num_of_rows) {
    for(let i=1; i <= num_of_rows; i++) {
        console.log(" ");
        for(let j=5; j-i; j--) {
            console.log("*");
        }
    }
}

leftTriangle(5);
rightTriangle(6);