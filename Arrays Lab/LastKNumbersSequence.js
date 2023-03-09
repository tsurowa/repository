function LastKNumbersSequence(n, k) {
    let numArr = [];
    numArr[0] = 1;

    for(let i = 0; i < n - 1; i++) {
        let tempSum = 0;
        tempSum += numArr[i];
        for (let j = 1; j < k; j++) {
            if (numArr[i - j] !== undefined) {
                tempSum += numArr[i - j];
            }
        }
        numArr[i + 1] = tempSum;
    }
    return numArr;
}

console.log(LastKNumbersSequence(6, 3));
console.log(LastKNumbersSequence(8, 2));