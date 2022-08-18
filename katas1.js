//1//
function oneThroughTwenty() {
  let numeros1 = [];
  for (let i = 1; i <= 20; i = i + 1) {
    numeros1.push(i);
  }
  return numeros1;
}
console.log(oneThroughTwenty());

//2//
function evensToTwenty() {
  let numeros2 = [];
  for (let i = 2; i <= 20; i = i + 2) {
    numeros2.push(i);
  }
  return numeros2;
}
console.log(evensToTwenty());

//3//
function oddsToTwenty() {
  let numeros3 = [];
  for (let i = 1; i <= 19; i = i + 2) {
    numeros3.push(i);
  }
  return numeros3;
}
console.log(oddsToTwenty());

//4//
function multiplesOfFive() {
  let numeros4 = [];
  for (let i = 5; i <= 100; i = i + 5) {
    numeros4.push(i);
  }
  return numeros4;
}
console.log(multiplesOfFive());

//5//
function squareNumbers() {
  let numeros5 = [];
  for (let i = 1; i <= 10; i = i + 1) {
    numeros5.push(i * i);
  }
  return numeros5;
}

console.log(squareNumbers());

//6//
function countingBackwards() {
  let numeros6 = [];
  for (let i = 20; i >= 1; i--) {
    numeros6.push(i);
  }

  return numeros6;
}
console.log(countingBackwards());

//7//
function evenNumbersBackwards() {
  let numeros7 = [];
  for (let i = 20; i >= 2; i = i - 2) {
    numeros7.push(i);
  }
  return numeros7;
}
console.log(evenNumbersBackwards());

//8//
function oddNumbersBackwards() {
  let numeros8 = [];
  for (let i = 19; i >= 1; i = i - 2) {
    numeros8.push(i);
  }
  return numeros8;
}
console.log(oddNumbersBackwards());

//9//
function multiplesOfFiveBackwards() {
  let numeros9 = [];
  for (let i = 100; i >= 5; i = i - 5) {
    numeros9.push(i);
  }
  return numeros9;
}
console.log(multiplesOfFiveBackwards());

//10//
function squareNumbersBackwards() {
  let numeros10 = [];
  for (let i = 10; i >= 1; i = i - 1) {
    numeros10.push(i * i);
  }
  return numeros10;
}

console.log(squareNumbersBackwards());
