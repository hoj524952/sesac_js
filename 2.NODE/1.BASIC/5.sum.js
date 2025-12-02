function sum_to_max(max) {
    let sum = 0;
    for(i=1; i<=max; i++){
        
        sum += i;
    }
    console.log(`1부터 ${max}까지의 합은: ${sum}`);
}

function sum_to_number_guess(max) {
    sum =(max * (max + 1)) / 2;
    console.log(`1부터 ${max}까지의 합은 ${sum}`);
}



console.time("sum-to-100");
console.time(sum_to_max(10000000));
console.timeEnd("sum-to-100");

/* console.time("guess")
console.time(sum_to_number_guess(10000000))
console.timeEnd("guess") */

// sum_to_max(105435345345345423423423234234234324234324324234234230);