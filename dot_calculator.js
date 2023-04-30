function dotCalculator (equation) {
    let array = equation.split(' ')
    let operations = {
        '+': function(a, b) {
            return a.length + b.length
        },
        '-': function(a, b) {
            return a.length - b.length
        },
        '*': function(a, b) {
            return a.length * b.length
        },
        '//': function(a, b) {
            return a.length / b.length
        }
    }
    let numberOfDots = operations[array[1]](array[0], array[2])
    return '.'.repeat(numberOfDots)
}
dotCalculator();