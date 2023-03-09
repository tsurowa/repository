function DiagonalSums(matrix) {
    let main = 0;
    for (let i = 0; i < matrix.length; i++) {
        main += matrix[i][i];
    }
    matrix.reverse();
    let secondary = 0;
    for (let i = 0; i < matrix.length; i++) {
        secondary += matrix[i][i];
    }
    console.log(main, secondary);
}

DiagonalSums(
    [[20, 40],
    [10, 60]]
   );
DiagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );