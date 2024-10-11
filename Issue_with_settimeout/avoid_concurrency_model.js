// async function fetchSequentialData() {
//     const response1 = await fetch('https://api.example.com/data1');
//     const data1 = await response1.json();
    
//     // The second request will only happen after the first request completes
//     const response2 = await fetch('https://api.example.com/data2?param=' + data1.id);
//     const data2 = await response2.json();

//     console.log('First data:', data1);
//     console.log('Second data:', data2);
// }

// fetchSequentialData();


function fetchdata1(){
    return fetch('https://api.example.com/data1').then(response=>response.json)
}
function fetchdata2(data1){
    return fetch('https://api.example.com/data2?param=' + data1.id).then(response=>response.json);
}

fetchdata1.then(data1=>{
    return  fetchdata2(data1);
}).then(data2=>{
    console.log(data2)
})
