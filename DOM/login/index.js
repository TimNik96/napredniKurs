const clockContainer = document.querySelector('.login-content-clock')
const adviceContainer = document.querySelector('.login-content-advice-text')
const adviceChanger = document.querySelector('.login-content-advice-changer')
const adviceTextContainer = document.querySelector('.login-content-advice-text')

const generateTime = (container) => {
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()

    if(sati < 10)
        sati = '0' + sati
    
    if(minuti < 10) 
        minuti = '0' + minuti
    
    if(sekunde < 10)
        sekunde = '0' + sekunde
    
    const vreme = `${sati}:${minuti}:${sekunde}`

    container.textContent = vreme
    
    return setTimeout(() => {
        generateTime(container)
    }, 1000)
}

const generateAdvice = () => {
    const advice = [
        'Ne trci pred rudu!',
        'Dodjoh, videh, pobedih!',
        'Prvo skoci, pa reci hop!',
        'Ko pita, ne skita!',
        'Nema glupih pitanja, samo glupih odgovora!',
        'Ko drugome jamu kopa, sam u New Jersey!',
        'Ko rano rani, dve lopte ragbi!'
    ]

    return advice[Math.floor(Math.random() * advice.length)]
}

generateTime(clockContainer)

adviceChanger.addEventListener('click', () => {
    adviceTextContainer.style.animationName = 'showAdvice'
    adviceContainer.textContent = generateAdvice()

    setTimeout(() => {
        adviceTextContainer.style.animationName = 'none'
    }, 700)
})