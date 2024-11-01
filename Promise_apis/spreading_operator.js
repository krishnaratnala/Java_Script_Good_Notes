//The spread operator (...) is used to spread the elements of an array (or object properties) into another array (or object), 
//essentially allowing you to create shallow copies or merge arrays/objects.

/// using array
const arr=[1,2,3,4]
const arr1=[...arr,5]
console.log(arr1)
/// merge two arrays
const merge_arr=[...arr,...arr1]
console.log("This is merge array using spread opeator")
console.log(merge_arr)
// using object

// const obj1={
//     name:'Jhon',
//     age:25
// }
// const obj2={
//     ...obj1
// }
// console.log(obj2.name)
const state = {
    user: { name: "Alice", age: 25 },
    loggedIn: true
};
const newState = {
    ...state
};
console.log(newState);
// Output: { user: { name: 'Alice', age: 26 }, loggedIn: true }
