function maskify(cc) {
    if (cc.length > 4) {
        let result = '';
        return cc.split('').reduce((acc, cur, i) => {
            if (cc.length - i > 4) {
                result += '#';
            } else {
                result += cur;
            }
            return result;
        }, '');
    } else {
        return cc;
    }
}

maskify();