'use strict'

const numbers = [45, 33, 9, 67, 22]
console.log('Numbers are', numbers)
console.log('Get First Number:', getFirst(numbers))
console.log('Get Last Number:', getLast(numbers))
console.log('Average is', getAverage(numbers))
console.log('Minimum is', getMinimum(numbers))
console.log('Maximum is', getMaximum(numbers))
console.log('Total is', getTotal(numbers))

function getFirst (array) {
    return array[0]
}
function getLast (array) {
    return array[array.length - 1]
}
function getAverage (array) {
    let average = 0
    for (let i = 0; i < array.length; i++) {
        average += array[i]
    }
    return average / array.length
}
function getMinimum (array) {
    let min = array[0]
    for (let i = 1; i < array.length; ++i) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}
function getMaximum (array) {
    let max = array[0]
    for (let i = 1; i < array.length; ++i) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
function getTotal (array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}
