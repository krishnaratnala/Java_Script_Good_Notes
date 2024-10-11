// Create an array of numbers. Write a function that takes an array and returns the sum of all numbers in the array.
let numbers=[1,2,3,4]
function sumofallnumbers(numbers){
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    console.log(sum)
}
sumofallnumbers(numbers);

// another method

let numbers1=[1,2,3,4]
function sumofallnumbers1(){
    console.log(numbers1.reduce((arr,crr)=>arr+crr),0)
}
sumofallnumbers1();