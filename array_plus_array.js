function arrayPlusArray(arr1, arr2) {
    let newArray = [].concat(arr1, arr2);
    let sum = 0;
    for (let i = 0; i < newArray.length; i++){
        sum += newArray[i];
    }
    console.log(sum)
    return sum;
}

arrayPlusArray([1, 2, 3], [4, 5, 6])