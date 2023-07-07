// const spinWords = (string) => {
//     const arrOfWords = string.split(" ")
//     let reversed = ''
//     arrOfWords.forEach((word, index) => {
//         if(word.length >= 5) { 
//             reversed = word.split("").reverse().join("")
//             // arrOfWords[index] = reversed
//             arrOfWords.splice(index, 1, reversed)
//             // console.log(reversed)
//         }
//     })

//     return arrOfWords.join(" ")
// }

// const str = "Bili smo na kursu i ucili smo danas module. Pored toga smo vezbali i pokazali nove stvari iz animacija. Bio je uspesan dan!"

// console.log(spinWords(str))

///////////////////////////////////////////////

// const camelCase = (str) => {
//     const arrOfWords = str.split("-")
//     let newWord = ""
//     arrOfWords.forEach((word, index) => {
//         if(index == 0)
//             return
//         newWord = word.charAt(0).toUpperCase() + word.substring(1)
//         arrOfWords.splice(index, 1, newWord)
//     })
//     return arrOfWords.join("")
// }

// let str = "the-stealth-warrior"

// console.log(camelCase(str))

///////////////////////////////////////

// console.log("straße".toUpperCase())
// console.log("straße".toUpperCase().toLowerCase())
// console.log("straße".toUpperCase().toLowerCase().length)

// const niz = [1, 2, 3, 4, 5]

// console.time('mojTajmer')
// for(let i = 0; i < niz.length; i++) {
//     if(niz[i] % 2 == 0)
//         console.log(niz[i])
// }
// console.timeEnd('mojTajmer')

// let niz = [1, 3, 5]
// const niz_1 = [2, 4, 6]
// niz = niz_1

// niz_1.push(8)
// console.log(niz, niz_1)

// console.log(niz.filter(el => el % 2 === 0))

// const niz = [1, 2, 3, 4, 5]

// const noviNiz = niz.filter(el => el % 2 !== 0).map(el => el ** 2).sort((a, b) => b - a)