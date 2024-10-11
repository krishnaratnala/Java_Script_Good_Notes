const promise1=new Promise((resolve)=>setTimeout(resolve,2000,'medium'))
const promise2=new Promise((_,reject)=>setTimeout(reject,1000,'quick'))
const promise3=new Promise((resolve)=>setTimeout(resolve,4000,'slow'))

Promise.any([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
})