let matrixAddition = (matx1, matx2) => {
    let matxSum = []
    for (i = 0; i < matx1.length; i++) {
        let subArrTemp = []
        for (j = 0; j < matx1[i].length; j++) {
            subArrTemp.push(matx1[i][j] + matx2[i][j])
        }
        matxSum.push(subArrTemp)
    }
    return matxSum
}
