const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promise1 Resolved"),5000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promise2 Resolved"),10000)
})


async function Promise_handling(){
    console.log("start1");
    const value1=await p1
    console.log(value1)
    console.log("start2");
    const value2 =await p2
    console.log(value2)
    console.log("end");
}
function hello(){
    console.log("hello");
}
Promise_handling();
hello();
