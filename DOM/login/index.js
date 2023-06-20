const forma = document.querySelector('form')
const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const errorMessageContainer = document.querySelector('.login-form-error-message')
const welcomeContainer = document.querySelector('.login-content-heading')
const clockContainer = document.querySelector('.login-content-clock')
const adviceContainer = document.querySelector('.login-content-advice-text')
const adviceChanger = document.querySelector('.login-content-advice-changer')
const adviceTextContainer = document.querySelector('.login-content-advice-text')
const locationText = document.querySelector('.login-content-location')

const usersArr = [
    {
        username: 'marko123',
        password: 'admin123'
    },
    {
        username: 'MJ',
        password: 'lopta12'
    },
    {
        username: 'johndoe',
        password: 'znamprogramiranje123'
    }
]

const generateTime = (container) => {
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()
    let dobaDana = ''

    if(sati > 12) {
        sati = sati - 12
        dobaDana = 'PM'
    } else {
        dobaDana = 'AM'
    }

    if(sati < 10)
        sati = '0' + sati
    
    if(minuti < 10) 
        minuti = '0' + minuti
    
    if(sekunde < 10)
        sekunde = '0' + sekunde
    
    const vreme = `${sati}:${minuti}:${sekunde} ${dobaDana}`

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

const isFormInvalid = (user, password) => {
    if(user.value.trim() === '')
        return true
    if(password.value.trim() === '')
        return true

    return false
}

const displayError = (user, pass, messageContainer, message) => {
    if(user.value.trim() === '')
        user.style.borderColor = '#f00'
    if(pass.value.trim() === '')
        pass.style.borderColor = '#f00'

    messageContainer.textContent = message
    messageContainer.style.opacity = 1

    setTimeout(() => {
        user.style.borderColor = '#fff'
        pass.style.borderColor = '#fff'
        messageContainer.style.opacity = 0
    }, 2000)
}

generateTime(clockContainer)
adviceContainer.textContent = generateAdvice()
locationText.innerHTML = `
    Beograd, ${new Date().getFullYear()}. </br>
    Skupina entuzijasta frontendasa!
`
adviceChanger.addEventListener('click', () => {
    adviceTextContainer.style.animationName = 'showAdvice'
    adviceContainer.textContent = generateAdvice()

    setTimeout(() => {
        adviceTextContainer.style.animationName = 'none'
    }, 700)
})

forma.addEventListener('submit', (event) => {
    event.preventDefault()
    let user = {}
   
    if(isFormInvalid(inputUsername, inputPassword)) {
        displayError(inputUsername, inputPassword, errorMessageContainer, 'Morate popuniti sva polja!')
        return 
    }

    user = usersArr.find(u => u.username === inputUsername.value.trim() && u.password === inputPassword.value.trim())

    if(user == undefined) {
        displayError(inputUsername, inputPassword, errorMessageContainer, 'Proverite unete podatke!')
        return
    }

    welcomeContainer.textContent = `Dobro vece, dobrodosao ${user.username}!`
})

