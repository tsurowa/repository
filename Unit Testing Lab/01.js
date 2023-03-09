function subSum(numArr, startIndex, endIndex) {
    let sum = 0;
    if(!Array.isArray(numArr)) {
        return NaN;
    }
    if(startIndex < 0) {
        startIndex = 0;
    }
    if(endIndex >= numArr.length - 1) {
        endIndex = numArr.length - 1;
    }
    for(let i = startIndex; i < endIndex + 1; i++) {
        if(typeof numArr[i] != 'number') {
            return NaN
        }
        sum += numArr[i];
    }
    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
