function x(){
    var i=1;
    setTimeout(function y(){
        console.log(i);
    },5000);
    console.log("hello");
}
x();
