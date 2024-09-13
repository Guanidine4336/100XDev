const fs = require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
})

console.log("hi bhai");

let a = 0;
// this is very long longer than file read
// but still file read is waiting in callback queue 
// as the current thread is busy here
for (let i = 0; i < 100000000; i++){
    a++;
}
// first hi  ayush is read 
// and then the file as the thread is busy here
console.log("hi ayush");