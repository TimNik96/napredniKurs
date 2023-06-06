// Metode za dohvatanje elemenata iz html-a

// document.getElementById("ID")
// document.getElementsByClassName("CLASS")
// document.getElementsByTagName("TAG")

// document.querySelector(".class")
// document.querySelectorAll(".class")

// Polja za upis sadrzaja u elemente

// textContent
// innerText
// innerHTML

// Kreiranje elemenata u JS-u

// document.createElement("element")

// Dodavanje elemenata na stranicu

// document.body.append(p, h1, select, h2)
// document.body.appendChild(p)
// document.body.prepend()

// Dodavanje klasa elementima

// p.classList.add("novaKlasa")
// p.classList.remove()
// p.classList.contains("klasa")

// p.class = "klasa1"

// Kretanje kroz elemente

// parentElement
// children

const p = document.querySelector('.mojP')
// p.textContent = ""
p.innerHTML = "<span>Dodat novi element</span>"
p.style.color = "#f00"
p.style.backgroundColor = "#ff0"
// p.innerText = ""
p.parentElement
p.children

for(let i = 0; i < p.children.length; i++) {
    p.children[i].textContent
}

const section = document.createElement('section')
section.classList.add = "text-picture-section"

section.setAttribute("id", "mojSection")

option.setAttribute('selected', "")
option.setAttribute('disabled', "")
img.setAttribute('src', "")

// section.append(element1, element2, ...)

document.body.appendChild(section)