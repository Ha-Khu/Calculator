


function add (addNumber1, addNumber2) {
    let sum = addNumber1 + addNumber2
    return sum
}

function subtract (subtractNumber1, subtractNumber2) {
    let sum = subtractNumber1 - subtractNumber2
    return sum
}

function multiply (multiNumber1, multiNumber2) {
    let sum = multiNumber1 * multiNumber2
    return sum
}

function divide (divNumber1, divNumber2) {
    let sum = divNumber1 / divNumber2
    return sum
}


let firstNumber = 3
let operator = "+"
let secondNumber = 5

function operate (firstNumber, operator, secondNumber) {
    switch(operator) {
        case "+":
            output = add(firstNumber, secondNumber)
            break;
        
        case "-":
            output = subtract(firstNumber, secondNumber)
            break;
        
        case "*":
            output = multiply(firstNumber, secondNumber)
            break;
        
        case "/":
            output = divide(firstNumber, secondNumber)
            break;
    }
    return output
}

console.log(operate(5,"+",5))
