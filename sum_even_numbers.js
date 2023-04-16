function sumEvenNumbers(input) {
    let sum = 0;
    input.forEach(num => {
        if(num %2 === 0) {
            sum += num;
        }
    });
    return sum;
}

console.log(sumEvenNumbers([1,5,6,2]))