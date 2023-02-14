const calculatorDisplay = document.querySelector(".display-container")
// numbers
const zero = document.querySelector("#zero")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const height = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const pi = document.querySelector('#pi')
const constantE = document.querySelector('#constantE')
// operator
const openParenthesis = document.querySelector("#opened-parenthesis")
const closedParenthesis = document.querySelector("#closed-parenthesis")
const eraseAll = document.querySelector("#erase-all-sign")
const eraseButton = document.querySelector("#erase-button")
const divideButton = document.querySelector("#split-operator")
const multiplicationButton = document.querySelector("#multiplication-operator")
const lessButton = document.querySelector("#less-operator")
const plusButton = document.querySelector("#plus-operator")
const decimalButton = document.querySelector("#decimal-operator")
const equalButton = document.querySelector("#equal-button")
const moduloButton = document.querySelector('#modulo')
const exponentButton = document.querySelector('#exponent')
const plusminusButton = document.querySelector('#plusminus')
const sinButton = document.querySelector("#sin")
const cosButton = document.querySelector("#cos")
const tanButton = document.querySelector("#tan") 
const cotButton = document.querySelector("#cot") 
const cosecButton = document.querySelector("#cosec") 
const secButton = document.querySelector('#sec')
const factorialButton = document.querySelector("#factorial")
const sigchangeButton = document.querySelector("#sigchange")
const oneuponxButton = document.querySelector("#oneuponx") 
const xsqureButton = document.querySelector("#xsqure") 
const xcubeButton = document.querySelector("#xcube") 
const modxButton = document.querySelector("#modx")
const changeButtons = document.getElementsByClassName("#changebutton")
const ceilButton = document.querySelector("#ceil")
const floorButton = document.querySelector("#floor")
const randomButton = document.querySelector("#random")
// calculator array
let calculatorArray;
let calculatorDomArray = [];
// other variable 
let secondval = true
let tempSpan
let counter
let parenthesisCounter
let finalParenthesis
let toLoop = false
// this variable is used to save how many time the user click a number before an operator, that's for the purpose of blocking the user to make numbers larger than 15 digits
let characterCounter = 0;
let tempcharacterCounter
eventFunction()
function eventFunction() {
    // append function
    function appendNumber(number) {
        // create span container function
        tempSpan = document.createElement('span');
        tempSpan.classList.add('colored-text');
        tempSpan.textContent = number;
        calculatorDomArray.push(tempSpan)
        calculatorDisplay.append(tempSpan);
    }
    // number event listener
    one.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(1)
        }
    })
    two.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(2)
        }
    })
    three.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(3)
        }
    })
    four.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(4)
        }
    })
    five.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(5)
        }
    })
    six.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(6)
        }
    })
    seven.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(7)
        }
    })
    height.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(8)
        }
    })
    nine.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(9)
        }
    })
    zero.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(0)
        }
    })
    pi.addEventListener("click", () => {
        if(characterCounter < 1) {
            characterCounter++
            appendNumber(3.14)
        }
    })
    constantE.addEventListener("click", () => {
        if(characterCounter < 1) {
            characterCounter++
            appendNumber(2.718281828459045)
        }
    })
    // operator event listener 
    decimalButton.addEventListener("click", () => {
        characterCounter++
        appendNumber(".")
    })
    plusButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("+")
    })
    lessButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("-")
    })
    multiplicationButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("*")
    })
    divideButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("/")
    })
    moduloButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("%")
    })
    exponentButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("^")
    })
    sinButton.addEventListener("click", () => {
        sinmethod()
    })
    cosButton.addEventListener("click", () => {
        cosmethod()
    })
    tanButton.addEventListener("click", () => {
        tanmethod()
    })
    cotButton.addEventListener("click", () => {
        cotmethod()
    })
    cosecButton.addEventListener("click", () => {
        cosecmethod()
    })
    secButton.addEventListener("click", () => {
        secmethod()
    })
    factorialButton.addEventListener("click", () => {
        factorial()
    })
    sigchangeButton.addEventListener("click", () => {
        sigchangefunction()
    })
    oneuponxButton.addEventListener("click", () => {
        oneuponx()
    })
    modxButton.addEventListener("click", () => {
        modx()
    })
    // changeButtons.addEventListener("click", () => {
    //     changeButton('firstvalue','secondvalue')
    // })
    ceilButton.addEventListener("click", () => {
        ceilfunction()
    })
    floorButton.addEventListener("click", () => {
        floorfunction()
    })
    randomButton.addEventListener("click", () => {
        randomfunction()
    })
    openParenthesis.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("(")
    })
    closedParenthesis.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber(")")
    })
    eraseButton.addEventListener("click", () => {
        calculatorDisplay.textContent = ""
        calculatorDomArray.pop()
        tempSpan = document.createElement('span');
        tempSpan.classList.add('colored-text');

        for (let i = 0; i < calculatorDomArray.length; i++) {
            tempSpan.append(calculatorDomArray[i].textContent)
            calculatorDisplay.append(tempSpan)
        }
        characterCounter--
        if (characterCounter < 0) {
            characterCounter = tempcharacterCounter
        }
    })
    eraseAll.addEventListener("click", () => {
        calculatorDisplay.textContent = ""
        calculatorDomArray = []
        characterCounter = 0
    })
    equalButton.addEventListener("click", () => {
        // all the calculator used function
        let openParenthesisSign = 0
        let openParenthesisCounter = 0 
        let closedParenthesisCounter = 0
        calculatorArray = calculatorDisplay.textContent.split("")
        uniteCharacter()
        parseCalculatorArray()
        while(calculatorArray.includes("(" || calculatorArray(")"))) {
            solveMultiplicationAndDivisionInParenthesis()
            solveAdditionsAndSubtractionInParenthesis()

            // crash preventing
            if (calculatorArray.includes(NaN)) {
                errorhandler()
                break
            }

            for (let i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(") {
                    openParenthesisCounter++
                    openParenthesisSign = i
                }
                if (calculatorArray[i] === ")") {
                    closedParenthesisCounter++
                }
            }
            // count how many pharenthesis he user has inserted 
            if (openParenthesisCounter !== closedParenthesisCounter) {
                errorhandler()
                break
            }
            else if (openParenthesisCounter === closedParenthesisCounter && calculatorArray[openParenthesisSign + 1] === ")") {
                errorhandler()
                break
            }
            
        } 
        while(calculatorArray.includes("*") || calculatorArray.includes("/") || calculatorArray.includes("+") || calculatorArray.includes("-")|| calculatorArray.includes("%") || calculatorArray.includes("^") || calculatorArray.some(x => x < 0) && calculatorArray.length !== 1) {
            solveMultiplicationAndDivision()
            solveAdditionsAndSubtraction()
            solvedmod()
            exponent()
        }
        appendResult()
        // calculator logic
        // function used to unite into number all the string 
        function uniteCharacter() {
            let counter = 0
            while (calculatorArray[counter + 1] !== undefined) {
                try {
                    if (isNaN(parseFloat(calculatorArray[counter])) && calculatorArray[counter] !== "-") {
                        counter++
                    }
                    else if (isNaN(parseFloat(calculatorArray[counter])) === false || calculatorArray[counter] === "-") {
                        if (isNaN(parseFloat(calculatorArray[counter + 1])) === false || calculatorArray[counter + 1] === ".") {
                            let numberCounter = counter
                            while (isNaN(parseFloat(calculatorArray[numberCounter + 1])) === false || calculatorArray[counter + 1] === ".") {
                                calculatorArray[numberCounter] += calculatorArray[numberCounter + 1]
                                calculatorArray.splice(numberCounter + 1, 1)
                            }
                        }
                        else {
                            counter++
                        }
                    }

                } catch (e) {
                    counter--
                    break
                }
            }
            console.log(calculatorArray)
            calculatorArray[calculatorArray.length - 1] = calculatorArray[calculatorArray.length - 1].replaceAll('undefined', '')
        }
        // function to parse all the string into number
        function parseCalculatorArray() {
            for (let i = 0; i < calculatorArray.length; i++) {
                if (isNaN(parseFloat(calculatorArray[i])) === false) {
                    calculatorArray[i] = parseFloat(calculatorArray[i])
                }
            }
        }
    })
    // function used to prevent the browser from crashing when the user insert something wrong 
    function errorhandler() {
        alert("You have insert something wrong, pls retry")
        alert("don't do something like 33(22+44)")          
    }
    // function used to solve first all the multiplicatio in parenthesis
    function solveMultiplicationAndDivisionInParenthesis() {
        do {
            for (let j = calculatorArray.length; j > 0; j--) {
                if (calculatorArray[j] === ")") {
                    finalParenthesis = j
                }
            }
            for (let i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(" && i < finalParenthesis) {
                    parenthesisCounter = i
                    counter = parenthesisCounter + 1
                }
            }
            for (let i = parenthesisCounter; i < finalParenthesis; i++) {
                if (calculatorArray[i] === "*" || calculatorArray[i] === "/") {
                    toLoop = true
                    break
                }
                else {
                    toLoop = false
                }
            }

            while (counter < finalParenthesis) {
                counter++
                // iterate trought the parenthesis
                for (let operatorChecker = parenthesisCounter + 1; operatorChecker < finalParenthesis; operatorChecker++) {
                    multiplyDivide(operatorChecker) 
                }
            }
        } while (toLoop === true && calculatorArray.includes("(") && calculatorArray.includes(")"))
    }
function multiplyDivide(operatorChecker) {
    // check if the number is negative
    while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "*" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
        calculatorArray[operatorChecker - 1] *= calculatorArray[operatorChecker + 1]
        calculatorArray.splice(operatorChecker, 2)
    }
    while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "/" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
        calculatorArray[operatorChecker - 1] /= calculatorArray[operatorChecker + 1]
        calculatorArray.splice(operatorChecker, 2)
    }
    while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "*" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
        calculatorArray[operatorChecker - 1] *= calculatorArray[operatorChecker + 1]
        calculatorArray.splice(operatorChecker, 2)
    }
    for (let i = 0; i < calculatorArray.length; i++) {
        if (calculatorArray[i - 1] === "(" && isNaN(parseFloat(calculatorArray[i])) === false && calculatorArray[i + 1] === ")") {
            calculatorArray.splice(i - 1, 1)
            i--
            calculatorArray.splice(i + 1, 1)
            i--
        }
    }
}
// function used to add and subtract in pharenthesis
    function solveAdditionsAndSubtractionInParenthesis() {
        do {
            for (let j = calculatorArray.length; j > 0; j--) {
                if (calculatorArray[j] === ")") {
                    finalParenthesis = j
                }
            }
            for (let i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(" && i < finalParenthesis) {
                    parenthesisCounter = i
                    counter = parenthesisCounter + 1
                }
            }
            for (let i = parenthesisCounter; i < finalParenthesis; i++) {
                if (calculatorArray[i] === "+" || calculatorArray[i] === "-") {
                    toLoop = true
                    break
                }
                else {
                    toLoop = false
                }
            }
            
            
            while (counter < finalParenthesis) {
                counter++
                // iterate trought the pharenthesis
                for (let operatorChecker = parenthesisCounter + 1; operatorChecker < finalParenthesis; operatorChecker++) {
                    sumSubtract(operatorChecker)                
                }
            }
        } while (toLoop === true && calculatorArray.includes("(") && calculatorArray.includes(")"))
    }

    function sumSubtract(operatorChecker) {
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] < 0 && calculatorArray[operatorChecker - 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] += calculatorArray[operatorChecker]
            calculatorArray.splice(operatorChecker, 1)
        }
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "+" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] += calculatorArray[operatorChecker + 1]
            calculatorArray.splice(operatorChecker, 2)
        }
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "-" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] -= calculatorArray[operatorChecker + 1]
            calculatorArray.splice(operatorChecker, 2)
        }
        // check if there is a negative number 
        

        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i - 1] === "(" && isNaN(parseFloat(calculatorArray[i])) === false && calculatorArray[i + 1] === ")") {
                calculatorArray.splice(i - 1, 1)
                i--
                calculatorArray.splice(i + 1, 1)
                i--
                finalParenthesis = parenthesisCounter
                toLoop = false
            }
        }        
} 
// solve multiplication and division that are outside of the parenthesis
function solveMultiplicationAndDivision() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "*") {
                calculatorArray[i - 1] *= calculatorArray[i + 1]
                calculatorArray.splice(i,2)
            }
            if (calculatorArray[i] === "/") {
                calculatorArray[i - 1] /= calculatorArray[i + 1]
                calculatorArray.splice(i,2)
            }
            if (i === calculatorArray.length - 1 && calculatorArray.includes("*") || calculatorArray.includes("/")) {
                i = 0
            }
        }
}
// solve addition and subtraction that are outside of the parenthesis
function solveAdditionsAndSubtraction() {
    for (let i = 0; i < calculatorArray.length; i++) {
        if (calculatorArray[i] === "+") {
            calculatorArray[i - 1] += calculatorArray[i + 1]
            calculatorArray.splice(i,2)
        }
        if (calculatorArray[i - 1] !== undefined && calculatorArray[i] < 0) {
            calculatorArray[i - 1] += calculatorArray[i]
            calculatorArray.splice(i,1)
        }
    }
}     
function solvedmod() {
    for (let i = 0; i < calculatorArray.length; i++) {
        if (calculatorArray[i] === "%") {
            calculatorArray[i - 1] %= calculatorArray[i + 1]
            calculatorArray.splice(i,2)
        }
    }
}   
function exponent() {
    for (let i = 0; i < calculatorArray.length; i++) {
        if (calculatorArray[i] === "^") {
            calculatorArray[i - 1] = Math.pow(calculatorArray[i + 1], calculatorArray[i - 1])
            calculatorArray.splice(i,2)
        }
    }
}   
function sinmethod() {
    calculatorDisplay.textContent = Math.sin(calculatorDisplay.textContent)
} 
function cosmethod() {
    calculatorDisplay.textContent = Math.cos(calculatorDisplay.textContent)
} 
function tanmethod() {
    calculatorDisplay.textContent = Math.tan(calculatorDisplay.textContent)
}
function cotmethod() {
    calculatorDisplay.textContent = 1/Math.tan(calculatorDisplay.textContent)
}
function cosecmethod() {
    calculatorDisplay.textContent = 1/Math.sin(calculatorDisplay.textContent)
}
function secmethod() {
    calculatorDisplay.textContent = 1/Math.cos(calculatorDisplay.textContent)
}
function factorial() {
    if (calculatorDisplay.textContent < 0) {
      return NaN; // Error: factorial of negative number is undefined
    }
    if (calculatorDisplay.textContent === 0 || calculatorDisplay.textContent === 1) {
      return 1; // Base case: factorial of 0 or 1 is 1
    }
    let result = 1;
    for (let i = 2; i <= calculatorDisplay.textContent; i++) {
      result *= i;
    }
    return calculatorDisplay.textContent = result;
}
function sigchangefunction() {
    if(calculatorDisplay.textContent.charAt(0) === "-") {
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1)
    } else {
        calculatorDisplay.textContent = "-" + calculatorDisplay.textContent
    }
}
function oneuponx() {
    calculatorDisplay.textContent = 1/calculatorDisplay.textContent;
}
function modx() {
    if(calculatorDisplay.textContent.charAt(0) === "-") {
        calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1)
    }
}
function ceilfunction() {
    calculatorDisplay.textContent = Math.ceil(calculatorDisplay.textContent)
}
function floorfunction() {
    calculatorDisplay.textContent = Math.floor(calculatorDisplay.textContent)
}
function randomfunction() {
    calculatorDisplay.textContent = Math.random(calculatorDisplay.textContent)
}
// function changeButton(currentVal, nextVal) {
//     if(flag == 1) {
//         for (let element of document.getElementsByClassName(currentVal)) {
//             element.style.display = "none";
//         }
//         for (let element of document.getElementsByClassName(nextVal)) {
//             element.style.display = "inline-block";
//         }
//         flag = 0;   
//     } else {
//         for (let element of document.getElementsByClassName(nextVal)) {
//             element.style.display = "none";
//         }
//         for (let element of document.getElementsByClassName(currentVal)) {
//             element.style.display = "inline-block"
//         }
//         flag = 1;
//     }
// }
    function appendResult() {
        calculatorDisplay.textContent = ""
        calculatorDomArray = []
        let tempSpan = document.createElement("span")
        tempSpan.append(calculatorArray[0])
        tempSpan.classList.add('colored-text')
        calculatorDisplay.append(tempSpan)
    }
    // end of the function2.718281828459045
}