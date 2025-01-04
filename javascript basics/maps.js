// when input array is given and u need to transform
// multily every value of array by 2

// maps creates a new array by calling a function 
// on every element of the original array and storing 
// the results in a new array
const input = [2, 4, 6, 8];

function  transform(i) {
    return i * 2;
}

const ans=input.map(transform);
console.log(ans);