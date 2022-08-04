//Write a function that takes in an array and returns it with the rows
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//WRITE CODE BELOW:











//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// EXAMPLES
// matrix = [[5, 9, 21],
//           [9, 19, 6],
//           [12, 14, 15]]

// matrixReverse(matrix) =>[ [ 5, 9, 12 ],
//                           [ 9, 19, 14 ],
//                           [ 21, 6, 15 ] ]

// matrix = [[5, 10, 8, 6],
//           [10, 2, 7, 9],
//           [21, 15, 19, 10]]

// matrixReverse(matrix) => [ [ 5, 10, 21 ],
//                            [ 10, 2, 15 ],
//                            [ 8, 7, 19 ],
//                            [ 6, 9, 10 ] ]



//****************************SOLUTION********************************


// let matrixReverse = function(matrix) {
//     //The following are to be used to turn this into the lucky
//     let columns = []
//     let row = 0
//     let rowItem = 0
//     while (rowItem < matrix[row].length) {
//         let tempCol=[]
//         while (row < matrix.length) {
//             tempCol.push(matrix[row][rowItem])
//             row++
//         }
//         columns.push(tempCol)
//         row = 0
//         rowItem++
//     }
//     return columns
// }
// matrix = [[5, 9, 21],
// [9, 19, 6],
// [12, 14, 15]]

// console.log(matrixReverse(matrix))

// matrix = [[5, 10, 8, 6],
// [10, 2, 7, 9],
// [21, 15, 19, 10]]

// console.log(matrixReverse(matrix))
