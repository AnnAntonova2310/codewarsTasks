function sortMyString(S) {
    let str1 = '';
    let str2 = '';
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0 || i === 0) {
            str1 += S[i];
        } else {
            str2 += S[i];
        };
    }
    return str1 + ' ' + str2;
};

sortMyString('hi');