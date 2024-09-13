function sum(num1, num2, fnToCall) {
    let ans = num1 + num2;
    fnToCall(ans);
}

function displayres(data) {
    console.log(data);
}

function displayrespassive(data) {
    console.log("sum res is: " + data);
}
// function callbaks 
// if u have to use function call only once
const val = sum(2, 3, displayrespassive);