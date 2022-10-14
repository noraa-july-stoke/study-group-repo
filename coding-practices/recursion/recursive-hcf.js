const hcf = (num1,num2) => {
    let highest = Math.max(num1,num2)
    let lowest = Math.min(num1,num2)
    if (highest%lowest === 0) return lowest
    return hcf(lowest,highest%lowest)

}

console.log(hcf(100,52))
