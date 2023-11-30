import sum from './sum.js'
import readInput from './input.js'

// Welcome print
console.log("Technical Challenge One from enterprise: Escribo Inovação para o Aprendizado\n")

// Reading the number 
let number = readInput()

// Calculating the sum of all values ​​divisible by 3 or 5 and which are less than the previous number
const result = sum(number)

// Printing the result
console.log(`\nThe sum of all values ​​divisible by 3 or 5 and which are less than the previous number is: \n${result}\n`)