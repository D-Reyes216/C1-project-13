/* https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function evenOrOdd(number) {
    if(Math.abs(number % 2) > 0){ // Math.abs() makes sure that the number being divided by 2 is greater than 0
      return "Odd"; // if modulus 2 is greater than 0, it means the number is not divisible by 2 and therefore odd
    } else{
      return "Even"; // if modulus 2 is equal to 0, then the number is divisible by 2 and therefore even
    }
  }