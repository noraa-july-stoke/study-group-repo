/* Create a function, numericalOrder that re-orders elements in an array by
ascending numerical value */

let numericalOrder = (arr) => {
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<arr[i-1])  {
            [arr[i-1], arr[i]]=[arr[i], arr[i-1]];
            i=1
            console.log(arr);
        }
    }
    console.log(arr)
    return arr
}

let arr1 = [5,4,3,2,1]

numericalOrder(arr1)
