var oneButton = document.getElementById('one')

var addButton = document.getElementById('add')

var equalButton = document.getElementById('equal')

var action = ""
var a = ''
var b = ''
var reset = true

oneButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '1';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '1';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})


addButton.addEventListener('click', function () {
    action = '+'
    a = (document.getElementById('digits')).innerHTML
    reset = true
})

equalButton.addEventListener('click', function () {
    b = (document.getElementById('digits')).innerHTML
    var dig = ''
    dig = calc(a, action, b)
        (document.getElementById('digits')).innerHTML = dig
    reset = true
})


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function reset() {
    return 0;
}

function result() {

}

function dot(a) {
    return a + '.';
}

function calc(a, action, b) {
    if (action === '-') {
        return a - b;
    } else if (action === '+') {
        var c=''
        c = a+b
        return c;
    } else if (action === '*') {
        return a * b;
    } else if (action === '/') {
        return a / b;
    }
}
