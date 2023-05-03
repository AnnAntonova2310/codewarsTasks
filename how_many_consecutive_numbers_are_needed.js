function consecutive(arr) {
    let arrNew=[];
    for(let i=arr.sort((a,b)=>a-b)[0];i<=arr.sort((a,b)=>a-b)[arr.length-1];i++){
        arrNew.push(i)};
    return arrNew.length-arr.length;
}
