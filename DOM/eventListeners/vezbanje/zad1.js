const forma = document.querySelector('form')
const inputNumber = document.querySelector('#num')
const p = document.querySelector('p')

const prostBroj = (broj) => {
    for(let i = 2; i < Math.sqrt(broj); i++) {
        if(broj % i == 0)
            return false
    }

    return true
}

forma.addEventListener('submit', (e) => {
    e.preventDefault()

    if(prostBroj(+inputNumber.value) == true) {
        p.textContent = 'Broj je prost'
        return
    }

    p.textContent = 'Broj nije prost'
})