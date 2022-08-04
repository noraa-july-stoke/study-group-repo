let matrixReverse = function (matrix) {
    let columns = []
    let row = 0
    let rowItem = 0
    while (rowItem < matrix[row].length) {
        let tempCol = []
        while (row < matrix.length) {
            tempCol.push(matrix[row][rowItem])
            row++
        }
        columns.push(tempCol)
        row = 0
        rowItem++
    }
    return columns
}

let getRowMins = function (matrix) {
    let mins = []
    for (let i=0; i<matrix.length; i++) {
        let rowMin = matrix[i][0]
        for (let j=0; j < matrix[i].length; j++) {
            if (matrix[i][j] < rowMin) rowMin = matrix[i][j]
        }
        mins.push(rowMin)
    }
    return mins
}

let getColMaxes = function (matrix) {
    let maxes = []
    for (let i = 0; i < matrix.length; i++) {
        let colMax = matrix[i][0]
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > colMax) colMax = matrix[i][j]
        }
        maxes.push(colMax)
    }
    return maxes

}

// let getLuckies = function (matrix1,matrix2) {
//     let rowMins = getRowMins(matrix)
//     let colMaxes = getColMaxes(matrixReverse(matrix))
//     for (let i=0; i<)
// }








// matrix = [[5, 9, 21],
//           [9, 19, 6],
//           [12, 14, 15]]

// console.log(getRowMins(matrix))
// console.log(getColMaxes(matrixReverse(matrix)))

// console.log(matrixReverse(matrix)); // [12]

matrix = [[5, 10, 8, 6],
[10, 2, 7, 9],
[21, 15, 19, 10]]

console.log(getRowMins(matrix))
console.log(getColMaxes(matrixReverse(matrix)))

console.log(matrixReverse(matrix)); // [10]

//functionality complete
