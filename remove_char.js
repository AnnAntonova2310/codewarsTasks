function removeChar(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i !== 0 && i !== str.length -1) {
            newStr += str[i]
        }
    }
    return newStr;
};

removeChar('hello');