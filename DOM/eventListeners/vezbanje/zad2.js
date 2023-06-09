const inputBroj = document.querySelector('#num')
const inputResenje = document.querySelector('#rezultat')
const btn = document.querySelector('button')

const reverseNumber = (number) => {
    return number.split("").reverse().join("")
}

btn.addEventListener('click', () => {
    if(inputBroj.value == '') {
        alert('Unesite broj')
        return
    }

    inputResenje.value = reverseNumber(inputBroj.value)
})