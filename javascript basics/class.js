class Animal{
    constructor(name, legs, speak) {
        this.name = name;
        this.legs = legs;
        this.speak = speak;
    }
    speaks() {
        console.log(this.speak);
    }
    // static krdia means can be called without creating an obj
    static naam() {
        console.log("animal");
    }
}

// let dog = {
//     name: "kutta",
//     legs: 4,
//     speaks:"bhow bhow"
// }

let dog = new Animal("kutta", 4, "bhow bhow");
let cat = new Animal("billi", 4, "meow meow");
console.log(dog.legs);
cat.speaks();
Animal.naam();




// DATE CLASS 
// INBUILT 
const currdate = new Date();
console.log(currdate.getMonth() + 1);


