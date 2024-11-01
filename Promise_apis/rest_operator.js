//The rest operator (...) is used to collect the remaining elements of an array or object into a new array or object. 
//It's the opposite of the spread operator and is commonly used in function arguments


// Using arrays
const arr1=[1,2,3,4,5,6,7]
const [f,s,...many]=arr1
console.log(many)

// using fucntion arguments

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10



