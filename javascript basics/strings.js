let a = "hello ayush";

console.log(a.indexOf("ayush"));

console.log(a.slice(0, 7));

console.log(a.replace("ayush", "bkl"));

console.log(a);
 
let string = "hello my name is,ayush";
// split distributes into array wrt a parameter
let str = string.split(" ");
// here parameter is comma
let str2 = string.split(",");
console.log(str);
console.log(str2);

// trim
str = "   hello man         ";
// trims extra space at beginn and end...
console.log(str.trim());

str = "ayush";
console.log(str.toUpperCase());


