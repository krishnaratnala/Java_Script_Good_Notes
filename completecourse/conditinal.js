//Write a function canVote that checks if a person is eligible to vote. The function should accept a person’s age and return true if they are 18 or older, otherwise false.

function canVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let user_input = prompt("Enter your age to check if you can vote:");
let age = parseInt(user_input);

if (canVote(age)) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
