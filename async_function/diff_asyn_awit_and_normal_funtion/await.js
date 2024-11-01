// differnece bewteen hading promise with normal fucntion and asycn fuction

const p=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promised Resolves")
    },5000)

});
async function handling_promise1(){
    console.log("start");

    const value=await p;
    console.log("hello")
    console.log(value+"this is promise1");
    const value2=await p;
    console.log(value2)
}
handling_promise1();



// function hadling_promise(){
//     p.then(result=>{
//         console.log(result)
//     })
//     console.log("hello")
// }
// hadling_promise();

