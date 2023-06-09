const ta = document.querySelector('textarea')
const btn = document.querySelector('button')

const refaktorisiString = (container) => {
    const str = container.textContent
    let refaktorisanString = ''

    for(let i = 0; i < str.length; i++) {
        refaktorisanString += str.charAt(i)
        if(str.charAt(i) == '.' && str.charAt(i + 1) != ' ') {
            refaktorisanString += ' '
        }
    }

    container.innerText = refaktorisanString
}

btn.addEventListener('click', () => {
    refaktorisiString(ta)
})