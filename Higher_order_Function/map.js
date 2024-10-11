let arr=[1,2,3,4,5]

function a(x){

    x();
}
function y (){
    const result=arr.map(item=>item*2);
    console.log(result);
    
}
a(y);
