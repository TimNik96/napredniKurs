const body = document.body

const h1 = document.createElement('h1')
h1.textContent = 'Lorem ipsum'

const p = document.createElement('p')
p.textContent = 'Ovaj p ima neki sadrzaj.'
p.style.fontWeight = 'bold'

const p1 = document.createElement('p')
p1.innerHTML = 'Ovaj p ima neki sadrzaj.<i>Ovaj p ima neki sadrzaj</i>.Ovaj p ima neki sadrzaj.'
p1.style.fontWeight = 'bold'

const div = document.createElement('div')
div.style.display = 'flex'
div.style.justifyContent = 'center'

const img = document.createElement('img')
img.src = "./monalisa-v.jpg"
img.alt = "monalisa"
img.style.width = '300px'

div.appendChild(img)

body.append(h1, p, p1, div)

const ul = document.createElement('ul')

for(let i = 0; i < 5; i++) {
    const li = document.createElement('li')
    li.textContent = i
    ul.appendChild(li)
}