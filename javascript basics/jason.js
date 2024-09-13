const user = {
    name: "Ayush",
    gender: "male"
}

console.log(user["name"]);

// json parse
// jason stringify

// converts into string....
JSON.stringify(user);
console.log(user);


// opposite upar wale ka ie string to object
const user2 = '{"name": "Ayush","gender":"male"}';
let string=JSON.parse(user2);
console.log(string["name"]);


