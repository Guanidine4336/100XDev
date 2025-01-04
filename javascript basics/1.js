let fname = "ayush";
let age = 20;
let married = false;

if (married) {
    console.log("hey"+ age);
} else {
    console.log("hey " + fname);
}

// for loops
let sum = 0;
for (let i = 0; i < 11; i++){
    sum+=i;
}
console.log(sum);

// arrays

let ages = [21, 22, 23, 24];

for (let i = 0; i < ages.length; i++){
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}

// object

const user = {
    firstname: "ayush",
    gender:"male"
}

console.log(user["gender"]);

// array of objects

const users = [{
    fname: "aman",
    gender:"male"
}, {
    fname: "anmol",
    gender:"male"
    }]

console.log(users[0].fname); 



