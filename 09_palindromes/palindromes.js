const palindromes = function (input) {
    // Remove punctuations and blank spaces in input, and convert it to lower case
    let newInput = input.replace(/[^\w]/g, '').toLowerCase();
    // Reusing te reverseString code to reverse the input string
    let reverseInput = newInput.split("").reverse().join("").toLowerCase();
    // Return if the input is the same as it's palindrome or not
    return newInput === reverseInput;
};

// Do not edit below this line
module.exports = palindromes;

palindromes("A car, a man, a maraca.")