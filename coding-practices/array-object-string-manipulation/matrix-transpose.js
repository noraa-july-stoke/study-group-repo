let matrixReverse = function (matrix) {
    let columns = []
    let rowItem = 0
    let row = 0
    while (rowItem < matrix[row].length) {
        let tempCol = [];
        while (row < matrix.length) {
            tempCol.push(matrix[row][rowItem]);
            row++;
        }
        columns.push(tempCol);
        row = 0;
        rowItem++;
    }
    return columns
}



let matrix1 = [[4,5,6],[7,8,9]]
matrix1 = matrixReverse(matrix1).reverse();
console.log(matrix1)

// matrix1 = matrixReverse(matrix1)
// console.log(matrix1)
// matrix2 = matrixReverse(matrix1)

// console.log(matrix2)
