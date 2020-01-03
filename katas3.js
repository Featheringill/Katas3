// let text;

function oneThroughTwenty() {
  const numbers = [];
  for (let counter = 1; counter <= 20; counter++) {
    numbers.push(counter);
  }
  return numbers;
}
const kata1 = document.getElementById("1_kata");
text = document.createTextNode(oneThroughTwenty());
kata1.appendChild(text);

function evensToTwenty() {
  const numbers = [];
  for (let counter = 2; counter <= 20; counter += 2) {
    numbers.push(counter);
  }
  return numbers;
}
const kata2 = document.getElementById("2_kata");
text = document.createTextNode(evensToTwenty());
kata2.appendChild(text);

function oddsToTwenty() {
  const numbers = [];
  for (let counter = 1; counter <= 20; counter += 2) {
    numbers.push(counter);
  }
  return numbers;
}
const kata3 = document.getElementById("3_kata");
text = document.createTextNode(oddsToTwenty());
kata3.appendChild(text);

function multiplesOfFive() {
  const numbers = [];
  for (let counter = 5; counter <= 100; counter += 5) {
    numbers.push(counter);
  }
  return numbers;
}
const kata4 = document.getElementById("4_kata");
text = document.createTextNode(multiplesOfFive());
kata4.appendChild(text);

function squareNumbers() {
  const numbers = [];
  for (let counter = 1; counter <= 10; counter += 1) {
    numbers.push(counter * counter);
  }
  return numbers;
}
const kata5 = document.getElementById("5_kata");
text = document.createTextNode(squareNumbers());
kata5.appendChild(text);

function countingBackwards() {
  const numbers = [];
  for (let counter = 20; counter >= 1; counter--) {
    numbers.push(counter);
  }
  return numbers;
}
const kata6 = document.getElementById("6_kata");
text = document.createTextNode(countingBackwards());
kata6.appendChild(text);

function evenNumbersBackwards() {
  const numbers = [];
  for (let counter = 20; counter >= 0; counter -= 2) {
    numbers.push(counter);
  }
  return numbers;
}
const kata7 = document.getElementById("7_kata");
text = document.createTextNode(evenNumbersBackwards());
kata7.appendChild(text);

function oddNumbersBackwards() {
  const numbers = [];
  for (let counter = 19; counter >= 1; counter -= 2) {
    numbers.push(counter);
  }
  return numbers;
}
const kata8 = document.getElementById("8_kata");
text = document.createTextNode(oddNumbersBackwards());
kata8.appendChild(text);

function multiplesOfFiveBackwards() {
  const numbers = [];
  for (let counter = 100; counter >= 5; counter -= 5) {
    numbers.push(counter);
  }
  return numbers;
}
const kata9 = document.getElementById("9_kata");
text = document.createTextNode(multiplesOfFiveBackwards());
kata9.appendChild(text);

function squareNumbersBackwards() {
  const numbers = [];
  for (let counter = 10; counter >= 1; counter -= 1) {
    numbers.push(counter * counter);
  }
  return numbers;
}
const kata10 = document.getElementById("10_kata");
text = document.createTextNode(squareNumbersBackwards());
kata10.appendChild(text);

//display all the even numbers from sampleArray

const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472
];

function evensFromSampleArray() {
  let evensArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 === 0) {
      evensArray.push(sampleArray[i]);
    }
  }
  return evensArray;
}

const kata11 = document.getElementById("11_kata");
text = document.createTextNode(evensFromSampleArray());
kata11.appendChild(text);

function oddsFromSampleArray() {
  let oddsArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 2 !== 0) {
      oddsArray.push(sampleArray[i]);
    }
  }
  return oddsArray;
}

const kata12 = document.getElementById("12_kata");
text = document.createTextNode(oddsFromSampleArray());
kata12.appendChild(text);

function divisibleByEight() {
  let eightsArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] % 8 === 0) {
      eightsArray.push(sampleArray[i]);
    }
  }
  return eightsArray;
}

const kata13 = document.getElementById("13_kata");
text = document.createTextNode(divisibleByEight());
kata13.appendChild(text);

function squaresFromSampleArray() {
  let squaresArray = [];
  for (let i = 0; i < sampleArray.length; i++) {
    let square = sampleArray[i] * sampleArray[i];
    squaresArray.push(square);
  }
  return squaresArray;
}

const kata14 = document.getElementById("14_kata");
text = document.createTextNode(squaresFromSampleArray());
kata14.appendChild(text);

function sumOfOnetoTwenty() {
  let sum = 0;
  for (let i = 0; i < 20; i++) {
    sum += i;
  }
  return sum;
}
const kata15 = document.getElementById("15_kata");
text = document.createTextNode(sumOfOnetoTwenty());
kata15.appendChild(text);

function sumOfSampleArray() {
  let sum = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    sum += sampleArray[i];
  }
  return sum;
}
const kata16 = document.getElementById("16_kata");
text = document.createTextNode(sumOfSampleArray());
kata16.appendChild(text);

function smallestOfSampleArray() {
  let smallest = sampleArray[0];
  for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] < smallest) {
      smallest = sampleArray[i];
    }
  }
  return smallest;
}

const kata17 = document.getElementById("17_kata");
text = document.createTextNode(smallestOfSampleArray());
kata17.appendChild(text);

function largestOfSampleArray() {
  let largest = sampleArray[0];
  for (i = 0; i < sampleArray.length; i++) {
    if (sampleArray[i] > largest) {
      largest = sampleArray[i];
    }
  }
  return largest;
}

const kata18 = document.getElementById("18_kata");
text = document.createTextNode(largestOfSampleArray());
kata18.appendChild(text);
