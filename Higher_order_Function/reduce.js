let arr=[1,2,3,4,5]
function a(x){
    
    x();
}
function y(){
    const result=arr.reduce((acc,cur)=>acc+cur,0);
    console.log(result);
    
    
}
a(y);
