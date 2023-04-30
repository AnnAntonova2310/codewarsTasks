function validParentheses(parenStr) {
    let result = 0;
    for (var i = 0 ; i < parenStr.length && result >= 0; i++) {
        result += (parenStr[i] == '(') ? 1 : -1;
    }
    return (result == 0);
}
validParentheses();