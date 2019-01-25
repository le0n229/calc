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
    document.getElementById('digits').style.fontSize = '60px'
    reset = true
    addButton.style.removeProperty('background-color')
    multiplyButton.style.removeProperty('background-color')
    subButton.style.removeProperty('background-color')
    divideButton.style.removeProperty('background-color')
})

oneButton.addEventListener('click', function () {
    if (reset === true) {
        let dig = '1';
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    } else {
        let dig = (document.getElementById('digits')).innerHTML
        dig = dig + '1';
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
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
        if (dig[dig.length - 1] === '.') {
            //alert ('Вы ввели неккоректный символ')
            return
        }
        dig = dig + '.';
        if (dig.length > 20) {
            alert('Работа с цифрами более 20 символов не предусмотрена системой')
            return
        }
        if (dig.length === 10) {
            document.getElementById('digits').style.fontSize = '30px'
        }
        (document.getElementById('digits')).innerHTML = dig
        reset = false
    }
})


addButton.addEventListener('click', function () {
    action = '+'
    a = (document.getElementById('digits')).innerHTML
    reset = true
    addButton.style.backgroundColor = 'red'
})

equalButton.addEventListener('click', function () {
    b = (document.getElementById('digits')).innerHTML
    var dig = ''
    dig = calc(a, action, b)
    if (dig.length > 20) {
        alert('Работа с цифрами более 20 символов не предусмотрена системой')
        return
    }
    if (dig.length > 10) {
        document.getElementById('digits').style.fontSize = '30px'
    }
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
    let sum = 0
    let pointPlace1 = 0
    let pointPlace2 = 0
    let pointPlace = 6
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] === '.') {
            pointPlace1 = arg1.length - i - 1
        }
    }
    for (let i = 0; i < arg2.length; i++) {
        if (arg2[i] === '.') {
            pointPlace2 = arg2.length - i - 1
        }
    }
    if (operation === '-') {
        sum = (Number(arg1) - Number(arg2))
    } else if (operation === '+') {
        sum = Number(arg1) + Number(arg2)
    } else if (action === '*') {
        sum = (Number(arg1) * Number(arg2))
    } else if (action === '/') {
        sum = (Number(arg1) / Number(arg2))
    }
    sum = sum.toString()
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === '.') {
            sum = Number(sum)
            if ((pointPlace1 - pointPlace2) != 0) {
                pointPlace = (pointPlace1 > pointPlace2) ? (pointPlace1) : (pointPlace2);
            }
            sum = sum.toFixed(pointPlace)
            sum = sum.toString()
            return sum
        }
    }
    return sum
}
