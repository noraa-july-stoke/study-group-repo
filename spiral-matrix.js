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



let matrix1 = [[1,2,3], [4,5,6],[7,8,9]]
matrix2 = matrixReverse(matrix1).reverse();
console.log(matrix2)
console.log(matrixReverse(matrix2).reverse());




// matrix1 = matrixReverse(matrix1)
// console.log(matrix1)
// matrix2 = matrixReverse(matrix1)

// console.log(matrix2)









// matrix = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]

// console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]

// matrix = [[1, 2, 3, 4],
// [5, 6, 7, 8],
// [9, 10, 11, 12]]


// console.log(spiralOrder(matrix)); // [1,2,3,4,8,12,11,10,9,5,6,7]
