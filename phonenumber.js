/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses!
*/

function createPhoneNumber(arr) {
    if (arr.length !== 10) {
        console.log("Phone number must have 10 digits.")
    } else {
        const firstThreeDigits = arr.slice(0,3).join("");
        const secondThreeDigits = arr.slice(3,6).join("");
        const lastFourDigits = arr.slice(6,10).join("");

        return `(${firstThreeDigits}) ${secondThreeDigits}-${lastFourDigits}`;
    }
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));