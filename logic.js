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
    document.getElementById('digits').innerHTML = calc(a, action, b)
    reset = true

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


