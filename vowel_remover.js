function shortcut (string) {
    let vowels = 'aeiouAEIOU';
    let result = '';
    for (let i=0; i<string.length; i++){
        if(vowels.indexOf(string[i])===-1) {
            result += string[i];
        }
    }
    console.log(result)
    return result;
}

shortcut('Hello!')