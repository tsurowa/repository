function BiggestElement(matrix) {
    let temporary = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] > temporary) {
                temporary = matrix[i][k];
            }
        }
    }
    console.log(temporary);
}

BiggestElement([[20, 50, 10],
    [8, 33, 145]]
   );
   console.log('---------');
BiggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );