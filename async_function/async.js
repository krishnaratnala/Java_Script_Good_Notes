// async function get_data(){
//     return "getting data";

// }
// const data=get_data()
// console.log(data); //
// // data.then(result=>{
// //     console.log(result)
// // }).catch(err=>{
// //     console.error(err);
// // })



const p=new Promise((resolve, reject) => {
    resolve("Promise Resolved")

});

async function get_data(){
    return p;
}
const Promise_data=get_data()
// Promise_data.then(result=>{
//     console.log(result)
// });
console.log(Promise_data);
