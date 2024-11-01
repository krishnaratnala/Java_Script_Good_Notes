
const p=new Promise((resolve, reject) => {
    resolve("Promise Resolved")

});
function hadling_promise(){
    p.then(result=>{
        console.log(result+"this is promise");
    })
}


async function handling_promise1(){
    const value=await p;
    console.log(value+"this is promise1");

}
handling_promise1();

hadling_promise();

