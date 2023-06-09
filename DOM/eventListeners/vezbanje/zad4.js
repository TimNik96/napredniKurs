const pZadatak = document.querySelector('.zadatak')
const pRezultat = document.querySelector('.rezultat')
const btn = document.querySelector('button')

const izbaciZagrade = (str) => {
    let refaktorisanString = ''
    let zagrada = false
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) == '(')
            zagrada = true
        
        if(!zagrada) {
            refaktorisanString += str.charAt(i)
        }

        if(str.charAt(i) == ')')
            zagrada = false

    }
    return refaktorisanString
}

btn.addEventListener('click', () => {
    pRezultat.textContent = izbaciZagrade(pZadatak.textContent)
})
