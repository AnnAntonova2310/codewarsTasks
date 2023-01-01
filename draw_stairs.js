function drawStairs(n) {
    let a = '';
    for (let i = 0; i < n; i++) {
        a += String(' ').repeat(i)
        if (i < n - 1) {
            a += 'I\n'
        } else {
            a += 'I'
        }
    }
    return a;
}

drawStairs(3);