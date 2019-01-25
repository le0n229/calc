var oneButton = document.getElementById('one')
var twoButton = document.getElementById('two')
var threeButton = document.getElementById('three')
var fourButton = document.getElementById('four')
var fiveButton = document.getElementById('five')
var sixButton = document.getElementById('six')
var sevenButton = document.getElementById('seven')
var eightButton = document.getElementById('eight')
var nineButton = document.getElementById('nine')
var zeroButton = document.getElementById('zero')
var multiplyButton = document.getElementById('multiply')
var subButton = document.getElementById('sub')
var addButton = document.getElementById('add')
var divideButton = document.getElementById('divide')
var equalButton = document.getElementById('equal')
var dotButton = document.getElementById('dot')
var resetButton = document.getElementById('reset')
var action = ""
var a = ''
var b = ''
var reset = true



resetButton.addEventListener('click', function () {
    let dig = '0';
    (document.getElementById('digits')).innerHTML = dig
})

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

twoButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '2';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '2';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

threeButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '3';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '3';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

fourButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '4';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '4';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

fiveButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '5';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '5';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

sixButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '6';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '6';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

sevenButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '7';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '7';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

eightButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '8';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '8';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

nineButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '9';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '9';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

zeroButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '0';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '0';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})

dotButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '.';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '.';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})


addButton.addEventListener('click', function () {
    action = '+'
    a = (document.getElementById('digits')).innerHTML
    reset = true
    addButton.style.backgroundColor = 'red'
    subButton.style.removeProperty('background-color')
    multiplyButton.style.removeProperty('background-color')
    divideButton.style.removeProperty('background-color')
})

equalButton.addEventListener('click', function () {
    b = (document.getElementById('digits')).innerHTML
    var dig = ''
    dig = calc(a, action, b)
    let z = (document.getElementById('digits'))
    z.innerHTML = dig
    reset = true
    addButton.style.removeProperty('background-color')
    multiplyButton.style.removeProperty('background-color')
    subButton.style.removeProperty('background-color')
    divideButton.style.removeProperty('background-color')
})

subButton.addEventListener('click', function () {
    action = '-'
    a = (document.getElementById('digits')).innerHTML
    reset = true
    subButton.style.backgroundColor = 'red'
    addButton.style.removeProperty('background-color')
    multiplyButton.style.removeProperty('background-color')
    divideButton.style.removeProperty('background-color')
})

divideButton.addEventListener('click', function () {
    action = '/'
    a = (document.getElementById('digits')).innerHTML
    reset = true
    divideButton.style.backgroundColor = 'red'
    addButton.style.removeProperty('background-color')
    multiplyButton.style.removeProperty('background-color')
    subButton.style.removeProperty('background-color')
})

multiplyButton.addEventListener('click', function () {
    action = '*'
    a = (document.getElementById('digits')).innerHTML
    reset = true
    multiplyButton.style.backgroundColor = 'red'
    addButton.style.removeProperty('background-color')
    divideButton.style.removeProperty('background-color')
    subButton.style.removeProperty('background-color')
})

function calc(arg1, operation, arg2) {
    if (operation === '-') {
        return Number(arg1) - (arg2);
    } else if (operation === '+') {
        return Number(arg1) + Number(arg2)
    } else if (action === '*') {
        return Number(arg1) * Number(arg2);
    } else if (action === '/') {
        return Number(arg1) / Number(arg2);
    }
}
