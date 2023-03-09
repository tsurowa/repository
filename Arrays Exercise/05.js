function solve(arr) {
    let biggestNum = arr.shift();
    let newArr = [biggestNum];
    for (const number of arr) {
        if (number >= biggestNum) {
            biggestNum = number;
            newArr.push(number);
        }
    }
    return newArr;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));
