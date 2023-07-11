// let covek = {
//     ime: 'Petar',
//     prezime: 'Mitrovic',
//     godine: 55,
//     predstaviSe() {
//         return `Moje ime je ${this.ime} i prezivam se ${this.prezime}.`
//     }
// }

// console.log(covek.predstaviSe())

class Covek {
    constructor(ime, prezime, godine) {
        this._ime = ime
        this._prezime = prezime
        this._godine = godine
    }

    get ime(){
        return this._ime
    }

    set ime(novoIme) {
        this._ime = novoIme
    }

    get prezime(){
        return this._prezime
    }

    set prezime(novoPrezime) {
        this._prezime = novoPrezime
    }
        
    get godine(){
        return this._godine
    }

    set godine(noveGodine) {
        this._godine = noveGodine
    }   
    
    pozdrav() {
        console.log(`Pozdrav, ja sam ${this._ime} ${this._prezime}.`)
    }
}

class Profesor extends Covek {
    constructor(ime, prezime, godine, zanimanje, iskustvo) {
        super(ime, prezime, godine)
        this._zanimanje = zanimanje
        this._iskustvo = iskustvo
    }

    get zanimanje() {
        return this._zanimanje
    }

    set zanimanje(novoZanimanje) {
        this._zanimanje = novoZanimanje
    }

    get iskustvo() {
        return this._iskustvo
    }

    set iskustvo(novoIskustvo) {
        this._iskustvo = novoIskustvo
    }

    pozdrav() {
        console.log(`Pozdrav, ja sam profesor ${this._ime} ${this._prezime}.`)
    }
}

const covek1 = new Covek('Marko', 'Markovic', 26)
covek1.ime = 'Uros'
console.log(covek1.ime)
covek1.pozdrav()

const profa = new Profesor('Jovana', 'Stojanovic', 32, 'Profesor geografije', 7)

console.log(profa)
profa.pozdrav()

profa.iskustvo = 10


// Napraviti klasu Vozilo koje sadrzi polja broj sasije i godina proizvodnje.
// Zatim se prave klase Automobil i Autobus koji nasledjuju klasu Vozilo.
// Klasa Automobil ima polja broj vrata, tip karoserije i marku.
// Klasa Autobus ima polja namena(da li je graski ili linijski prevoz), marka i broj putnika

class Vozilo {
    constructor(brojSasije, godinaProizvodnje) {
        this._brojSasije = brojSasije
        this._godinaProizvodnje = godinaProizvodnje
    }

    get brojSasije() {
        return this._brojSasije
    }

    get godinaProizvodnje() {
        return this._godinaProizvodnje
    }
}

class Automobil extends Vozilo {
    constructor(brojSasije, godinaProizvodnje, brojVrata, tipKaroserije, marka) {
        super(brojSasije, godinaProizvodnje)
        this._brojVrata = brojVrata
        this._tipKaroserije = tipKaroserije
        this._marka = marka
    }

    get brojVrata() {
        return this._brojVrata
    }

    get tipKaroserije() {
        return this._tipKaroserije
    }

    get marka() {
        return this._marka
    }
}

class Autobus extends Vozilo {
    constructor(brojSasije, godinaProizvodnje, namena, marka, brojPutnika) {
        super(brojSasije, godinaProizvodnje)
        this._namena = namena
        this._marka = marka
        this._brojPutnika = brojPutnika
    }

    get namena() {
        return this._namena
    }

    set namena(newNamena) {
        this._namena = newNamena
    }

    get marka() {
        return this._marka
    }

    get brojPutnika() {
        return this._brojPutnika
    }

    set brojPutnika(brPutnika) {
        this._brojPutnika = brPutnika
    }
}

const vozilo = new Vozilo('12399BVDOSD342GSO', 2015)
// Izvezbati kreiranje novih objekata