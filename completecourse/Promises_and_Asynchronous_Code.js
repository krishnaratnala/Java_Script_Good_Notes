//Write a function that returns a Promise. The promise should resolve with "Success!" if the input is greater than 10, otherwise reject with "Failed!".
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve("Success!");
        } else {
            reject("Failed!");
        }
    });
}
checkNumber(15)
    .then(result => console.log(result)) // Output: "Success!" because 15 > 10
    .catch(error => console.log(error)); 
