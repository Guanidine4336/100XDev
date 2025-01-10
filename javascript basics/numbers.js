console.log(parseInt("3.14aaaddfdfg"));

// array
const array = [1, 2, 3];
array.push(5);
console.log(array);
array.pop();
console.log(array);

// shift pops from front
// unshift adds at front

array.shift();
console.log(array);
array.unshift(5);
console.log(array);

const array2 = [5, 6, 9];
const arr = [7, 1, 4];

console.log(array2.concat(arr));

const vec = [1, 2, 3];

function print(str) {
    console.log(str);
}

for (let i = 0; i < 3; i++){
    print(vec[i]);
}

// forEach after a fncallback print each element...
vec.forEach(print);


