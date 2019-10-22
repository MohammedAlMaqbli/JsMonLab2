const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
let fResult = document.getElementById('f-result')

const patterns = {
    num1: /^([0-9]+)(.[0-9]+)?$/,
    num2: /^([0-9]+)(.[0-9]+)?$/,
    opt: /^[\*\+\-\/]$/
}
const calculate = {
    '/': (num1, num2) => num1 / num2,
    '*': (num1, num2) => num1 * num2,
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
}
function validate(field, regex) {

    if (regex.test(field.value)) {
        field.className = 'valid';

        document.getElementById('result').style.display = 'none'
        fResult.innerHTML = ""
    } else {
        field.className = 'invalid';
        document.getElementById('result').style.display = 'none'
        fResult.innerHTML = ""
    }

}
inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {

        validate(e.target, patterns[e.target.attributes.name.value])
    })
});


form.addEventListener('submit', (e) => {
    e.preventDefault()
    inputs.forEach(input => {

        validate(input, patterns[input.name])
    });
    let check = document.querySelectorAll('.invalid').length == 0
    if (check) {
        document.getElementById('result').style.display = 'inline-block'


        fResult.textContent = calculate[inputs[1].value](parseFloat(inputs[0].value), parseFloat(inputs[2].value))
        // fResult.innerHTML = calculate[inputs[1]](parseFloat(inputs[0]), parseFloat(inputs[2]))
    } else {
        document.getElementById('result').style.display = 'none'
        fResult.innerHTML = ""
    }
    console.log(check)
});

