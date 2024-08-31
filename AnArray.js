/**
 * Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.


 */

const array1 = [];
const array2 = 20;
const array3 = [324,67,9,90];
const array4 = "[]";

console.log(Array.isArray(array1));
console.log(Array.isArray(array2));
console.log(Array.isArray(array3));
console.log(Array.isArray(array4));