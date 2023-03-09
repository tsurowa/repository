function solve (arr) {
    let sorted = arr.sort((a, b) => a - b);
    let newArr = [];
    while (sorted.length !== 0) {
        newArr.push(sorted.shift());
        newArr.push(sorted.pop())
    }
    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
