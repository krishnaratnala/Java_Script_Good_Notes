//Write a function outer that takes a number and returns an inner function. The inner function should multiply its argument by the number passed to outer.
function outer(x){
    function inner (y){
        return x*y
    }
    return inner(2);
}
console.log(outer(3));

/*
function outer(number){
    return function (number1){
        return number*number1
    }
}
let cou=outer(2);
console.log(cou(5));
*/

