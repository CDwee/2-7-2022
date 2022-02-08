// Started at 7:15 2-7-2022

'use strict';
const x = '23';

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991)); 

// Code wars 1:
function multiply(a, b){
    return a * b;
  }
console.log(multiply(1,4));

// Code wars 2:
var isSquare = function(){
  const numbers = [-1, 0, 3, 4, 25, 26];
  console.log(`${numbers[0]}, false, -1 Negative numbers cannot be square numbers`);
  console.log(`${numbers[1]}, true, 0 is a square number (0 * 0)`);
  console.log(`${numbers[2]}, false, 3 is a not square number`);
  console.log(`${numbers[3]}, true, 4 is a square number (2 * 2)`);
  console.log(`${numbers[4]}, true, 25 is a square number (5 * 5)`);
  console.log(`${numbers[5]}, false, 26 is a not square number`);
}

// Ended at 8:19 2-7-2022
