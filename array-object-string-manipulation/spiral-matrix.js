let turnRotisserie = (matrix) => {
    let columns = [];
    let rowItem = 0;
    let row = 0;
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
    return columns.reverse();

}

let spiralOrder = (matrix) => {
    let spiralNums = [];
    while (matrix.length > 1) {   // or matrix.length > 1???
        spiralNums.push(matrix.shift());
        matrix = turnRotisserie(matrix);
    }
    spiralNums.push(matrix.shift());
    return spiralNums.flat();
}

let spiralNums = []
let matrix1 = [[1,2,3], [4,5,6],[7,8,9]]
console.log(spiralOrder(matrix1))

matrix2 = [[1,2,3,4],
[5,6,7,8],
[9,10,11,12]]
console.log(spiralOrder(matrix2))
