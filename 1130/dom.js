const div = document.createElement('div')
div.id = "photo-container"

const div2 = document.createElement('div2')
div.className = "photo-item"

const img = document.createElement('img')
img.src = "http://127.0.0.1:5500/index.html"
img.alt = "photo"

div2.appendChild(img)
div.appendChild(div2)



const root = document.getElementById('root')
root.appendChild(div)

console.log(root)

const imgs = document.querySelectorAll('.photo-item img') 
console.log(imgs[0].alt)