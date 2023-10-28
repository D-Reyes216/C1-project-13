/*https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true

    Task

    Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

*/

function factorial(n) {
    let num = n; //variable to hold total value
    for(let i = 1; i < n; i++){ //for loop to multiply a number of times based off the given parameter 'n'
        num = num * (n-i); //multiply the current total value incrimentally less by 1 until it (n-1) is equal to 1
    }
    return num; // returns the number after everything has been multiplied
}