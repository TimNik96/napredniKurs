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

