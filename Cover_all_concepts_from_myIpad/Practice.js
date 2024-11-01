
///Closure
// function x(){
//     var a=10;
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();
//setTime out with closures


// function x(){
//     var a=10;
//     setTimeout(function y(){
//         console.log("hello"+a)
//     },1000)
//     console.log("Hello")
// }
// x();

//Print 1,2,3,4... in the cosole After each and every second

// function x(){
//     for (let i=1;i<10;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
// }
// x();

//First Class Function
// function greet(name){
//     return  `Hello, ${name}!`;
// }

// function logeedGreeting(fn,name){
//     console.log(fn(name))
// }
// logeedGreeting(greet,'aLI')

// returing function from another function


// function greeting(name1){
//     return function(name){
//         console.log(name+name1)
//     }
// }

// const heloo=greeting("krishna")
// heloo("he;;");

const obj2={
    a:10,
    x:function() {
        const y=()=>{
            console.log(this)
        }
        y();
    }
}
obj2.x();

