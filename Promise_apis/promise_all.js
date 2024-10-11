// This is promise.all()


const promise1=Promise.resolve(3)
const promise2=new Promise((resolve)=>setTimeout(resolve,1000,'foo'))
const promise3=Promise.resolve(4)


Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value)
})
