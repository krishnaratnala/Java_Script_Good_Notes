/*function x(a){
    a();

}
function cll(){
    console.log("hello");
}
x(cll);*/
function fetchdata(callback){
    setTimeout(function(){
        const data = { userId: 1, username: "john_doe" };
        callback(data);
    })

}
function processdata(data){
    console.log("Processing data:", data);
}
fetchdata(processdata); // Output: Processing data: { userId: 1, username: '

