import input from 'readline-sync'

// Function to read the input using readline-sync library
const readingInput = () => {
    let number = input.question("Enter a positive integer: ")
    
    // Checking if number is not a number or number is smaller equal to 0
    while(isNaN(number) || number <= 0) {
        number = input.question("\nThis program only accepts positive integers, please try again: ")
    }

    console.log(`\nThe number you entered was: \n${number}`)

    return Number(number)
}

export default readingInput;