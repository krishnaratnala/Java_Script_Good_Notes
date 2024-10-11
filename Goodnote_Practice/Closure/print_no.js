// print 1,2,3,4 in the console after each and evey second

function x(){
    for(let i=1;i<=10;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("hello")
}
x();
