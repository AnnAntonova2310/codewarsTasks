function sameCase(a, b) {
    if (a.match(/[a-z]/i) && b.match(/[a-z]/i)) {
        if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    } else {
        return -1
    }
}

sameCase('g', 'H') // fals
sameCase('0', 'H') // -1
sameCase('A', 'A') // t
sameCase('d', 'd') // t