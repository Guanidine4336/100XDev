// input array given
// return all even values

const input = [2, 5, 4, 6, 8, 7, 9, 10];

function filterlogic(i) {
    if (i % 2 == 0) return true;
    else return false;
}

const ans = input.filter(filterlogic);
console.log(ans);