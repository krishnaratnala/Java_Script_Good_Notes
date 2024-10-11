const promise1=Promise.resolve(3)
const promise2=new Promise((_,reject)=>setTimeout(reject,1000,'error'))
const promise3=Promise.resolve(4)

Promise.allSettled([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})
