function solve(matrix) {
    let sumRows = 0;
    let sumCols = 0;

    for(let i = 0; i < matrix.length; i++) {
        let currArr = matrix[i];
        for(let j = 0; j < currArr.length; j++) {
            sumRows += Number(currArr[j]);
            sumCols += Number(currArr[0]);
        }
    }
    
    if(sumCols === sumRows) {
        console.log('true');
    } else {
        console.log('false');
    }
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
