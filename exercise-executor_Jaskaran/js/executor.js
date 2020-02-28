function execute (operation, value1, value2) {
    if (typeof (operation) === 'string') {
        if (operation === 'ADD') { return value1 + value2 }
        if (operation === 'SUB') { return value1 - value2 }
        if (operation === 'MUL') { return value1 * value2 }
        if (operation === 'chaloupe') { return 'unknown operation name...' }
    } else if (typeof (operation) === 'function') {
        return value1 / value2
    } else { return 'unknown operation type...' }
}
