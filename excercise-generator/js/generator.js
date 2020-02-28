'use strict'

function createItem (name) {
    return '<li>' + name + '</li>'
}

function createList (array) {
    let temp = ''
    for (let i = 0; i < array.length; i++) {
        temp += createItem(array[i])
    }
    return temp
}
