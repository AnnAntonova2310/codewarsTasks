let countSheep = function (num) {
    let ph = ''
    for (let i = 0; i < num; i++) {
        ph+= `${i+1} sheep...`
    }
    return ph
}

countSheep(5)