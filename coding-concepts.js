// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: this will put 'indigo' after 'daffodil'
// b) Verify and explain: the .push add a value to the end of an array, thus pushing 'indigo' into the end of the array


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: this will give you the length in how many positions there are in the string
// b) Verify and explain: .length is an informational command that returns the number of elements in the array. The length is the always the last index of the array plus one. This is why even though there are 9 positions (starting from 0) the output is 10


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: this will return the letter 'o'
// b) Verify and explain: the greeting is being called by the console.log and the [4] is calling the letter in the 4th position in the string. Since we start at position '0' the letter that was returned was 'o'


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: it will return the word "Ruby"
// b) Verify and explain: the const index = 1 is referring to the first position in the array of const languages. So when the console.log calls forward languages[index] the output will read the 1st index of the languages array. With our position starting at '0' the 1st position word is considered 'Ruby'


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: this will make all letters in the words "saturday" and "sunday" upper case (or capitalized)
// b) Verify and explain: the console log shown above is not for an array, also if it were in parentheses instead the only word to be capitalized would be "sunday"


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I believe this will return the length of each word in a string along with the positions they are in inside the array
// b) Verify and explain: the reference website from github says that if number is in the array then number will be returned
