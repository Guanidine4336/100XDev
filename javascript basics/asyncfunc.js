function fsum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++){
        ans += i;
    }
    console.log(ans);
}
function fsumtill() {
    fsum(100);
}
// async func 
// hello bhau printed first
setTimeout(fsumtill, 1000);
console.log("hello  bhau");


