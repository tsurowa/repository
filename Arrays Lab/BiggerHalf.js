function BiggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let start = Math.floor(arr.length / 2);
    let result = [];
    for (let i = start; i < arr.length; i++) {
        result.push(sorted[i]);
    }
    return result
}

console.log(BiggerHalf([4, 7, 2, 5]));
console.log(BiggerHalf([3, 19, 14, 7, 2, 19, 6]));
