let matrixReverse = function(matrix) {
    //The following are to be used to turn this into the lucky
    let columns = []
    let maxList = []
    let minList = []
    let max = 0
    let min = 0
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//****************************************************************
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let row = 0
    let rowItem = 0
    while (rowItem < matrix[row].length) {
        let tempCol=[]
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


matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(matrixReverse(matrix)); // [12]

matrix = [[5, 10, 8, 6],
[10, 2, 7, 9],
[21, 15, 19, 10]]

console.log(matrixReverse(matrix)); // [10]

//functionality complete
