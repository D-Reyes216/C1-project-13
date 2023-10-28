// Problem #2619: Array Prototype Last https://leetcode.com/problems/array-prototype-last/description/

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.


Array.prototype.last = function() {
    if((this.length > 0)) { //the 'this' keyword will refer to the array that was used to call array.last()
        return this[this.length - 1]; //returns the last element in the array by subtracting 1 the total array length since arrays start at 0
    } else {
        return -1; //returns -1 if the array length is 0 or less which means there are no elements in it
    }
};



// Problem #2634. Filter Elements from Array

/*
    Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

    The fn function takes one or two arguments:

    arr[i] - number from the arr
    i - index of arr[i]
    filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

    Please solve it without the built-in Array.filter method.

    Example 1:

    Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
    Output: [20,30]
    Explanation:
    const newArray = filter(arr, fn); // [20, 30]
    The function filters out values that are not greater than 10
    Example 2:

    Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
    Output: [1]
    Explanation:
    fn can also accept the index of each element
    In this case, the function removes elements not at index 0
    Example 3:

    Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
    Output: [-2,0,1,2]
    Explanation:
    Falsey values such as 0 should be filtered out
 */

var filter = function(arr, fn) {
    let filteredArr = []; // array variable to be returned at the end of function
    for(let i = 0; i < arr.length; i++){ // loop through the whole arr parameter
        if(fn(arr[i], i)!=false){ // calls the function 'fn' and passes the current element of 'arr' as well as the index 'i' to it in order to see if the current 'arr' element in the loop fulfills the conditions of the 'fn' function
            filteredArr.push(arr[i]); // if the current 'arr' element fulfills the 'fn' function condiitons, the current 'arr' element is appended to the filteredArr to be returned later at the end of the function
        }   
    }
    return filteredArr; // returns filtered array
}


// https://leetcode.com/problems/array-reduce-transformation/

/*
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.

Please solve it without using the built-in Array.reduce method.


Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.
*/

var reduce = function(nums, fn, init) {
    let val = init; // initial value of the total is set to the value of 'init'
    for(let i = 0; i < nums.length; i++){ // for loop iterates through the whole 'nums' array to process all elements
        val = (fn(val, nums[i])) // adds the total of the 'fn' return value to the total 'val'
    }
    return val; // returns total of all calculations
}