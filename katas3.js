let text

// const test = document.getElementById("d1")
// console.log (test)
// for (i = 0; i <= 3; i++){
//     var newElement = document.createElement("div");
//     test.appendChild(newElement)
// }
function oneThroughTwenty() {
    const numbers = []
    for(let counter = 1; counter <= 20; counter++){
        numbers.push(counter)
    }
    return numbers;
}
const kata1 = document.getElementById("1_kata")
text = document.createTextNode(oneThroughTwenty())
kata1.appendChild(text)

function evensToTwenty() {
    const numbers = []
    for(let counter = 2; counter <= 20; counter += 2){
        numbers.push(counter)
    }
    return numbers;
}
const kata2 = document.getElementById("2_kata")
text = document.createTextNode(evensToTwenty())
kata2.appendChild(text)

function oddsToTwenty() {
    const numbers = []
    for(let counter = 1; counter <= 20; counter +=2){
        numbers.push(counter)
    }
    return numbers;
}
const kata3 = document.getElementById("3_kata")
text = document.createTextNode(oddsToTwenty())
kata3.appendChild(text)

function multiplesOfFive() {
    const numbers = []
    for(let counter = 5; counter <= 100; counter += 5){
        numbers.push(counter)
    }
    return numbers;
}
const kata4 = document.getElementById("4_kata")
text = document.createTextNode(multiplesOfFive())
kata4.appendChild(text)

function squareNumbers() {
    const numbers = []
    for(let counter = 1; counter <= 10; counter += 1){
        numbers.push(counter * counter)
    }
    return numbers;
}
const kata5 = document.getElementById("5_kata")
text = document.createTextNode(squareNumbers())
kata5.appendChild(text)

function countingBackwards() {
    const numbers = []
    for(let counter = 20; counter >= 1; counter --){
        numbers.push(counter)
    }
    return numbers;
}
const kata6 = document.getElementById("6_kata")
text = document.createTextNode(countingBackwards())
kata6.appendChild(text)

function evenNumbersBackwards() {
    const numbers = []
    for(let counter = 20; counter >= 0; counter -=2){
        numbers.push(counter)
    }
    return numbers;
}
const kata7 = document.getElementById("7_kata")
text = document.createTextNode(evenNumbersBackwards())
kata7.appendChild(text)

function oddNumbersBackwards() {
    const numbers = []
    for(let counter = 19; counter >= 1; counter -=2){
        numbers.push(counter)
    }
    return numbers;
}
const kata8 = document.getElementById("8_kata")
text = document.createTextNode(oddNumbersBackwards())
kata8.appendChild(text)

function multiplesOfFiveBackwards() {
    const numbers = []
    for(let counter = 100; counter >= 5; counter -=5){
        numbers.push(counter)
    }
    return numbers;
}
const kata9 = document.getElementById("9_kata")
text = document.createTextNode(multiplesOfFiveBackwards())
kata9.appendChild(text)

function squareNumbersBackwards() {
    const numbers = []
    for(let counter = 10; counter >= 1; counter -= 1){
        numbers.push(counter * counter)   
    }
    return numbers;
}
const kata10 = document.getElementById("10_kata")
text = document.createTextNode(squareNumbersBackwards())
kata10.appendChild(text)

