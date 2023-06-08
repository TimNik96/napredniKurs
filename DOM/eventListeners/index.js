const forma = document.querySelector("form")
const inputSabirak1 = document.querySelector("#sabirak1")
const inputSabirak2 = document.querySelector("#sabirak2")
const pRezultat = document.querySelector(".rezultat")

forma.addEventListener("submit", (event) => {
  event.preventDefault()

//   inputSabirak1.style.border = '1px solid #000'
//   inputSabirak2.style.border = '1px solid #000'

  // console.log(typeof inputTest.value)

  // console.log(event);
  // console.log(event.target.children[0]);

//   if (inputSabirak1.value == "" || inputSabirak2.value == "") {
//     alert("Imate prazna polja")
//   } else {
//     let rezultat = +inputSabirak1.value + +inputSabirak2.value
//     pRezultat.textContent = rezultat
//     forma.reset()
//   }

    //GUARD CLAUSES

    if(inputSabirak1.value.trim() === '') {
        inputSabirak1.style.border = '1px solid #f00'

        setTimeout(() => {
            inputSabirak1.style.border = '1px solid #000'
        }, 1500)

        return
    }


    function imef() {

    }

    const imeF = () => {
        inputSabirak1
    }

    const anonimus = () => {
        inputSabirak2.style.border = '1px solid #000'
    }

    if(inputSabirak2.value.trim() === '') {
        inputSabirak2.style.border = '1px solid #f00'

        // setTimeout(anonimus , 1500)

        // setTimeout(param1, param2)

        // param1 = anonimna f
        // param2 = vreme u ms

        return
    }

    if(isNaN(inputSabirak1.value.trim()) || isNaN(inputSabirak2.value.trim())) {
        alert('Ne smete unositi slova')
        return
    }

    let rezultat = +inputSabirak1.value + +inputSabirak2.value
    pRezultat.textContent = rezultat
    forma.reset()
})


// Napisati f-ju koja iz forme kupi broj i proverava da li je broj prost. Rezultat funkcije se ispisuje u paragrafu.
// Napisati f-ju koja za uneti broj okrece cifre u broju. Rezultat ispisuje u novom inputu. (4532 -> 2354)
// Napisati f-ju koja iz textarea uzima tekst i posle svake tacke ubacuje space ako on nedostaje.
// Napisati f-ju koja iz stringa uklanja sve sto se nalazi u zagradama. Rezultat ispisuje u paragrafu.