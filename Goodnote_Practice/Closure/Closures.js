/*
This is Basic Closure Structure

function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    y();
}
x();*/



function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
console.log(z)
z();

