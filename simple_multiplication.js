function simpleMultiplication(a) {
    let result = 0
    if (a % 2) {
        result = a * 9;
    } else {
        result = a * 8;
    }
    return result;
}

simpleMultiplication(10); 
simpleMultiplication(9);