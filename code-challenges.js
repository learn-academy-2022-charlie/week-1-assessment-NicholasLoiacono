// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

// Function Signature
// input: words
// output: string indicating the word with the most characters

// Example
// input: "apple", "banana" // output --> "banana"
// input: "cherry", "kiwi" // output --> "cherry"

// Process
// create a function that will take in two words and count the characters in each word and only return the word with the most characters
// two fruits were named in the beginning of the function
// next the lengths of each fruit word are established by using .length
// we asked for a return if the first fruit name was longer than the second and if not then return the name of the second fruit

const longerName = (fruit1, fruit2) => {
let fruit1length = fruit1.length
let fruit2length = fruit2.length
if(fruit1length > fruit2length) {
    return fruit1
} else {
    return fruit2
}
}
console.log(longerName("apple", "banana"))
console.log(longerName("cherry", "kiwi"))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212

// Function Signature
// input: numbers
// output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Example
// input: 42 // output --> "42 is below boiling point"
// input: 350 // output --> "350 is above boiling point"
// input: 212 // output --> "212 is at boiling point"

// Process
// 

const boilingPoint = (temp1, temp2, temp3) => {
if(temp1 < 212) {
    console.log("42 is below boiling point")
} else if(temp2 > 212) {
    console.log("350 is above boiling point")
} else if(temp3 = 212) {
    console.log("212 is at boiling point")
}
}
console.log(boilingPoint(42))
console.log(boilingPoint(350))
console.log(boilingPoint(212))

// console.log(temp1 + " 42 is below boiling point " + temp3)
// console.log(temp2 + " 350 is above boiling point " + temp3)
// console.log(temp3 + " is less than " + temp3)

// const boilingPoint = (temp1, temp2, temp3) => {
    // let temp1 = 42
    // let temp2 = 350
    // let temp3 = 212
    // if(temp2 > temp3) {
    //     return nice
    // } else {
    //     return nope
    // }
    // }
    // console.log(boilingPoint("42"))
    // console.log(boilingPoint("350"))
// const cooking = (temp1, temp2, temp3) => {
//     let temp1 = 42
//     let temp2 = 350
//     let temp3 = 212
//     if(temp1 < 212) {
//         return "42 is below boiling point"
//     } else if(temp2 > 212) {
//         return "350 is above boiling point"
//     } else {
//         return "212 is at boiling point"
//     }
// }
// console.log(cooking(42))
// console.log(cooking(350))
// console.log(cooking(212))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// Function Signature
// input: arrays
// output: combined arrays and add up number slots

// Example
// input: [3, 7, 0, 36, -9] and [8, -7, 42, 9, 13] // output --> [3, 7, 0, 36, -9, 8, -7, 42, 9, 13] 10

// Process
// create a function that will combine myNumbers1 and myNumbers2
// next we will call that new function with the comined arrays forward
// then use .length to find out how many numbers are in the combined array we created

const comboArrays = myNumbers1.concat(myNumbers2)
console.log(comboArrays)
console.log(comboArrays.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"

const currentCohort = "Charlie 2022"

// Function Signature
// input: string of a phrase
// output: "2202 eilrahC"

// Example
// input: "Charlie 2022" // output --> "2202 eilrahC"

// Process
// create an if statement declaring that currentCohort specifically equals "Charlie 2022"
// next create a console.log that call forward "2202 eilrahC" if currentCohort specifically equals "Charlie 2022"

if(currentCohort === "Charlie 2022") {
console.log("2202 eilrahC")
}


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Function Signature
// input: array of numbers
// output: my function should tell me which numbers are 'odd' and which numbers are 'even'

// Example
// input: [13, 34, 5, 10, 27, 42] // output --> odd, even, odd, even, odd, even

// Process
// create a for loop to check each number and whether it is odd or even
// the index will start at position 0 which is also the position of the number 13
// my if statement says that if any number [starting from my index point] is divisable by 2 with no remainder (or 0 remainder) then console.log it as "even"
// my else statement is going to call everything else (after it filters through my if statement) will be called "odd"

for(let index = 0; index < myArray.length; index++){

  if( myArray[index] % 2 === 0){
    console.log("even")
  } else {
    console.log("odd")
  }

}


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// Function Signature
// input: larger numbers and smaller numbers
// output: smaller numbers being subtracted from larger numbers

// Example
// input: 100-58 // output --> 42
// input: 27-24 // output --> 3

// Process
// create a console.log that will subtract the smaller number from the larger number
// the first console log will take number2 (100) and subtract number1 (58) from it to get the outcome of 42
// the second console log will take number3 (27) and subtract number4 (24) from it to get the outcome of 3

console.log(number2-number1)
console.log(number3-number4)