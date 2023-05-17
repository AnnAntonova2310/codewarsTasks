function height(n) {
    let s = 2000000;
    let cats = 2000000;
    while (n > 0) {
        cats = cats / 2.5;
        s += cats;
        n--;
    }
    return s.toFixed(3);
}