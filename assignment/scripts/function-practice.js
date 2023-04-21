console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Zackaria'))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log(addNumbers(9 ,10));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  let answer = num1*num2*num3;
  return answer;
}

console.log(multiplyThree(10, 10, 10))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let happy = []
function getLast( array ) {
    let final = array[array.length-1];
    return final;  
  }
  
console.log(getLast(happy))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let joyful = ['a','5','6','7','8']
function find( value, array ){
  for (let item of array){
    if (value === item){
      return true;
    }else 
    return false;
  }
}

console.log(find('a', joyful))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let char of string){
    if (letter === string[0]){
      return true;
    } else
    return false;
  } 
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



// 9. Function to return the sum of all numbers in an array
let cheery = [10,20,30]
function sumAll( numArray ) {
  let sum = 0;
  for (num of numArray){
    sum = sum += num    
  }
  // TODO: loop to add items
  return sum;
}
console.log(sumAll(cheery))




// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function returnPos(inputArray){
  let posArray = []
  for (items of inputArray){
    if (items > 0){
      posArray.push(items)
    }
  }return posArray;
}

let testArray = [-1, -2, -3, -4, 5 , 6, -7]
console.log(returnPos(testArray))



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//     
//     https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw
//     This is a function that converts a persons age in years to their age in days.
//     The function accepts one parameter and expects only positive integer input.
//     The function performs a simple calculation inside of a variable by multiplying the input value by 365, and then returns the value stored in the variable. 

console.log('Create a function that takes the age in years and returns the age in days.')

function calcAge(age){
  let days = age * 365;
  return days;
}

console.log(`You are ${calcAge(29)} days old`)




