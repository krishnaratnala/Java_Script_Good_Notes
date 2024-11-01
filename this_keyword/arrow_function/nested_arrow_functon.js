const obj2={
    a:10,
    x:function(){
        y:()=>{
            console.log(this)
        }
        y();
    }
}
obj2.x();