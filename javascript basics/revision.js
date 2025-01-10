// callback syntax
function readfile(callback) {
    callback("hi there");
}

function main() {
    readfile(function (value) {
        console.log(value);
    });
}

main();

// promise syntax (.then)
function ayushreadfile() {
    let p = new Promise(function (resolve) {
        resolve("hi there2");
    })

    return p;
}

function main2() {
    ayushreadfile().then(function (value) {
        console.log(value);
    })
}
main2();

// async await syntax

function kiratreadfile() {
    let p = new Promise(function (resolve) {
        resolve("hi bhai");
    })
    return p;
}

async function main3() {
    const value = await kiratreadfile();
    console.log(value);
}

main3();


console.log("hmmmm");
function promisified(duration) {
    console.log("haan");
    const p = new Promise(function (resolve) {
        console.log("before settimeout");
        setTimeout(resolve, duration);
    })
    return p;
}
// promise chaining
promisified(1000).then(function () {
    console.log("done1");
    return promisified(2000).then(function () {
        console.log("done2");
    })
})
