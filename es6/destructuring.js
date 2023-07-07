// ARRAY

const niz = [1, 2, 3]
const [el1, ,el3] = niz

console.log(el1, el3)

// OBJECT

const osoba = {
    ime: "Marko",
    prezime: "Markovic"
}

function pozdravi({ime, prezime}) {
    return `Pozdrav, ${ime} ${prezime}`
}