const saberi = (a = 0, b = 0) => {
    return a + b
}

const oduzmi = (a = 0, b = 0) => {
    return a - b
}

const pomnozi = (a = 1, b = 1) => {
    return a * b
}

const podeli = (a = 1, b = 1) => {
    return a / b
}

export const moduo = (a, b) => {
    return a % b
}

const PI = 3.14

const matematika = {
    saberi,
    oduzmi,
    pomnozi,
    podeli,
    PI
}

export default matematika