// Function to calculate the sum 
const sum = (n) => {
    let result = 0

    // Calculating the sum of all values ​​divisible by 3 or 5 and which are less than the previous n
    for (let i = 0; i < n; i++){
        if (i % 3 == 0 || i % 5 == 0) result += i
    }

    return result
}

export default sum;