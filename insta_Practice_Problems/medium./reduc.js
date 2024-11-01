const arr1=[1,2,3];
const arr2=[...arr1,4,5]
function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0);
};
console.log(sum(1,2,3,4,5));

