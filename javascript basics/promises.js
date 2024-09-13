// const fs = require("fs");

// function kiratsreadfile() {
//     console.log("inside kiratreadfile");
//     let p= new Promise(function (resolve) {
//         console.log("inside promise");
//         fs.readFile("a.txt", "utf-8", function (err, data) {
//             console.log("before resolve");
//             resolve(data);
//         });
//     });
//     return p;
// }


// function onDone(data) {
//     console.log(data);

// }

// let a = kiratsreadfile();
// console.log(a);
// a.then(onDone);


var d = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("foo");
    }, 1000);
     
});

function callback() {
    console.log(d);
}

// .then function works only when the promise is resolved
console.log(d);
d.then(callback);



