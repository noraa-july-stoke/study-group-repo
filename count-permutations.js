/**************ORIGINAL SOURCE: CODEWARS KATA BY Raulbc777
The number 1035 is the smallest integer that exhibits a non frequent property:
one its multiples, 3105 = 1035 * 3, has its same digits but in different order,
in other words, 3105, is one of the permutations of 1035.

The number 125874 is the first integer that has this property when the
multiplier is 2, thus: 125874 * 2 = 251748

Make the function search_permMult(), that receives an upper bound, nMax and a
factor k and will output the amount of pairs bellow nMax that are permuted when
an integer of this range is multiplied by k. The pair will be counted if the
multiple is less than nMax, too
 */




let numericalOrder = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) < Number(arr[i - 1])) {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            i = 0
        }
    }
    return arr
}

const search_permMult = (nMax, k) => {
    let stopNum = nMax / k;
    let count = 0;
    for (let i = 1035; i < stopNum; i++) {
        let numString = numericalOrder(`${i}`.split(''));
        let permCheckStr = numericalOrder(`${i * k}`.split(''))
        if (numString.join('') === permCheckStr.join('')) count++;
    }
    return count
}
