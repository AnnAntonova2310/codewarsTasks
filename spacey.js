function spacey(array){
    let arr =[];
    for (let i=0;i<array.length;i++){
        arr.push(array.slice(0,i+1))
    }
    return arr.map(v=>v.join(``))
}

spacey();