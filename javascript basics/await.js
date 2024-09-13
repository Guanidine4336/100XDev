const { resolve } = require("path");

function asyncfunc() {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("hi there")
        }, 1000);
    });
    return p;
}
// await causes to wait till resolve
// similar to .then
// can use value.then(callback)
// await needs to be written in async function 
// await cannot be written in main
async function main() {
    let value = await asyncfunc();
    console.log("hi bhai");
    console.log(value);
}

main();