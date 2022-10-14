let rmVowels = (word) => {
    let vowels = `aeiouAEIOU`
    let wordArr = word.split(``)
    for (i = 0; i < wordArr.length; i++) {
        if (vowels.includes(wordArr[i])) {
            wordArr.splice(i, 1)
            i--
        }
    }
    return wordArr.join(``)
}

//console.log(rmVowels(`deerhunter`)) => `drhntr`


let abbreviateWords = (sentence) => {

    sentArr = sentence.split(` `)
    for (let i = 0; i < sentArr.length; i++) {
        if (sentArr[i].length > 4) {
            sentArr[i] = rmVowels(sentArr[i])
        }
    }
    return sentArr
}

// console.log(abbreviateWords(`hey yo wordsssss`))

// console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
