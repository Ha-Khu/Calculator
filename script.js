let number0_DOM = document.querySelector(".number-0")
let number1_DOM = document.querySelector(".number-1");
let number2_DOM = document.querySelector(".number-2");
let number3_DOM = document.querySelector(".number-3");
let number4_DOM = document.querySelector(".number-4");
let number5_DOM = document.querySelector(".number-5");
let number6_DOM = document.querySelector(".number-6");
let number7_DOM = document.querySelector(".number-7");
let number8_DOM = document.querySelector(".number-8");
let number9_DOM = document.querySelector(".number-9");
let plus_DOM = document.querySelector(".plus-btn");
let minus_DOM = document.querySelector(".minus-btn");
let multiply_DOM = document.querySelector(".times-btn");
let divide_DOM = document.querySelector(".divide-btn");
let dot_DOM = document.querySelector(".dot-btn");
let equals_DOM = document.querySelector(".equals-btn");
let delete_DOM = document.querySelector(".delete-btn");
let reset_DOM = document.querySelector(".reset-btn");
let input_DOM = document.querySelector(".input-numbers");




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




function numbers () {
number0_DOM.addEventListener("click", function() {
    input_DOM.textContent += "0"
})

number1_DOM.addEventListener("click", function() {
    input_DOM.textContent += "1"
})

number2_DOM.addEventListener("click", function() {
    input_DOM.textContent += "2"
})

number3_DOM.addEventListener("click", function() {
    input_DOM.textContent += "3"
})

number4_DOM.addEventListener("click", function() {
    input_DOM.textContent += "4"
})

number5_DOM.addEventListener("click", function() {
    input_DOM.textContent += "5"
})

number6_DOM.addEventListener("click", function() {
    input_DOM.textContent += "6"
})

number7_DOM.addEventListener("click", function() {
    input_DOM.textContent += "7"
})

number8_DOM.addEventListener("click", function() {
    input_DOM.textContent += "8"
})

number9_DOM.addEventListener("click", function() {
    input_DOM.textContent += "9"
})
}


function symbols () {
plus_DOM.addEventListener("click", function() {
    input_DOM.textContent += "+"
})

minus_DOM.addEventListener("click", function() {
    input_DOM.textContent += "-"
})

multiply_DOM.addEventListener("click", function() {
    input_DOM.textContent += "*"
})

divide_DOM.addEventListener("click", function() {
    input_DOM.textContent += "/"
})

dot_DOM.addEventListener("click", function() {
    input_DOM.textContent += "."
})
}
let operatorrr = symbols()

delete_DOM.addEventListener("click", function() {
    input_DOM.textContent = input_DOM.textContent.slice(0, -1);
})

operate(5, operatorrr, 5)