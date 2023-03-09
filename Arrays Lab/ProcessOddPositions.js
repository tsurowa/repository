function ProcessOddPositions(arr) {
    let filtered = arr
    .filter((x, i) => i % 2 == 1)
    .map(x =>x * 2)
    .reverse()
    .join(" ");
    return filtered

}

console.log(ProcessOddPositions([10, 15, 20, 25]));
console.log(ProcessOddPositions([3, 0, 10, 4, 7, 3]));