const komsijeContainer = document.querySelector('.komsijeContainer')

const komsije = [
    {
        ime: 'Radivoje',
        prezime: 'Stanojevic',
        godine: 55,
        sprat: 5
    },
    {
        ime: 'Danka',
        prezime: 'Mitrovic',
        godine: 65,
        sprat: 1
    },
    {
        ime: 'Dragutin',
        prezime: 'Topic',
        godine: 30,
        sprat: 3
    }
]

const renderujKomsiluk = (arr, container) => {
    //prolazak kroz niz komsija kako bismo komsije prikazali na stranici
    arr.forEach((el, index) => {
        //kreiranje individualnog komsije
        const divKomsija = document.createElement('div')
        divKomsija.classList.add('komsija')

        const pImeKomsije = document.createElement('p')
        pImeKomsije.textContent = el.ime

        const pPrezimeKomsije = document.createElement('p')
        pPrezimeKomsije.textContent = el.prezime

        const pGodineKomsije = document.createElement('p')
        pGodineKomsije.textContent = el.godine

        const pSpratnost = document.createElement('p')
        pSpratnost.textContent = el.sprat

        const btnDelete = document.createElement('button')
        btnDelete.textContent = "Obrisi"
        btnDelete.classList.add('delete')

        //logika za brisanje komsije
        btnDelete.addEventListener('click', () => {
            arr.splice(index, 1)
            container.textContent = ""
            renderujKomsiluk(arr, container)
        })

        //dodavanje kreiranih elemenata na DOM
        divKomsija.append(pImeKomsije, pPrezimeKomsije, pGodineKomsije, pSpratnost, btnDelete)
        container.appendChild(divKomsija)  
    })
}

renderujKomsiluk(komsije, komsijeContainer)

let spratnost = 12

const renderSelect = (spratnost) => {
    const select = document.querySelector('#spratnost')
    // opciono, posto smo to vec napravili u HTML(inace bi morali ovde da kucamo)
    // const defaultOption = document.createElement('option')
    // defaultOption.value = 'default'
    // defaultOption.setAttribute('selected', '')
    // defaultOption.setAttribute('disabled', '')
    // select.appendChild(defaultOption)
    for(let i = 0; i <= spratnost; i++) {
        const option = document.createElement('option')
        option.value = i
        option.textContent = i
        select.appendChild(option)
    }
}

renderSelect(spratnost)