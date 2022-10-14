/* Create a function, numericalOrder that re-orders elements in an array by
ascending numerical value */

let numericalOrder = (arr) => {
    for (let i=0; i<arr.length; i++) {
        if (arr[i]<arr[i-1])  {
            [arr[i-1], arr[i]]=[arr[i], arr[i-1]];
            console.log(arr);
            i=0
        }
    }

    console.log(arr)
    return arr
}

let arr1 = [5,4,2,3,0,1]

numericalOrder(arr1)
