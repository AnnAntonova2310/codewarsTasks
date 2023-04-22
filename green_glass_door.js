function stepThroughWith(s) {
    let last = s[0];
    for(let i = 1; i < s.length; i++) {
        if (last === s[i]) return true;
        last = s[i];
    }

    return false;
}

console.log(stepThroughWith('moon'));