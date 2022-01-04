const nav = document.createElement('div')
nav.id = "nav"

const menu = document.createElement('div')
menu.id = "menu"

for(let i=0; i<2;i++) {
    const bar = document.createElement('div')
    bar.className = "bar"
    menu.appendChild(bar)
}

const screen_mode = document.createElement('div')
screen_mode.id = "screen-mode"

const profile_menu = document.createElement('div')
profile_menu.id = "profile-menu"

const bar = document.createElement('div')
bar.className = "bar"

const circle_btn = document.createElement('div')
circle_btn.id = "circle-btn"


const img = document.createElement('img')
img.src = "https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg"
img.alt = "photo"



profile_menu.appendChild(img)
screen_mode.appendChild(circle_btn)
menu.appendChild(bar)

nav.appendChild(menu)

nav.appendChild(screen_mode)
nav.appendChild(profile_menu)

const title = document.createElement('div')
title.id = "title"

const center = document.createElement('div')
center.id = "center"

const heading = document.createElement('div')
heading.id = "heading"

const h1 = document.createElement('h1')
h1.innerText = "My photo gallery"

const h4 = document.createElement('h4')
h4.innerText = "my old memories from my life"


const search = document.createElement('div')
search.id = "search"


const input = document.createElement('input')
input.type = 'text'
input.placeholder = "Search photo..."



search.appendChild(input)
heading.appendChild(h4)
heading.appendChild(h1)
center.appendChild(search)
center.appendChild(heading)
title.appendChild(center)

const photo_list = document.createElement('div')
photo_list.id = "photo-list"

for(let i=0; i<9;i++) {

    const photo_container = document.createElement('div')
    photo_container.className = "photo-container"

    const photo_card = document.createElement('div')
    photo_card.className = "photo-card"
    
    const photo_name = document.createElement('div')
    photo_name.className = "photo-name"
    photo_name.innerText = "이름"


    const image = document.createElement('img')
    image.src = "https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg"
    img.alt = "null"

    photo_card.appendChild(image)
    photo_container.appendChild(photo_name)
    photo_container.appendChild(photo_card)
    photo_list.appendChild(photo_container)
}
const modal_window = document.createElement('div')
modal_window.className = "modal-window"

const header = document.createElement('div')
header.id = "header"
header.innerText = 'Food Recipe'

const body = document.createElement('div')
body.id = "body"

const p = document.createElement('p')
p.innerText= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi nesciunt facilis tempora qui temporibus, odio dolores reiciendis, quis voluptate ducimus quam. Voluptatum omnis, rem quam porro ipsam nam dolorum.Laudantium aliquam suscipit, nobis exercitationem neque inventore incidunt quos possimus numquam! Temporibus adipisci, illum in fuga earum magnam consequatur minima. Neque, labore esse tempora tenetur doloribus beatae. Facere, dolorum incidunt?Nulla facere earum fuga doloremque magni. Aspernatur excepturi ipsam commodi in ullam? Dolore, ipsa, a dignissimos, vel nulla alias accusantium qui voluptatibus officia minus est libero! Adipisci, fugit? Architecto, quia!"

const footer = document.createElement('div')
footer.id = "footer"

const button = document.createElement('button')
button.innerText = 'Close'

footer.appendChild(button)
body.appendChild(p)
modal_window.appendChild(footer)
modal_window.appendChild(body)
modal_window.appendChild(header)


document.body.appendChild(nav)
document.body.appendChild(title)
document.body.appendChild(photo_list)
document.body.appendChild(modal_window)
//3번
const cubHeading = document.querySelector('#heading h4')
cubHeading.innerText =  "my new memories from my life"
//4번
const profileMenuSearched = document.getElementById('profile-menu')
const profileImg = profileMenuSearched.querySelector('img')
profileImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrXPiQcj25vya6gJ71K_9W_4TSLoNPMEaXQ&usqp=CAU"
//5번
const photoItem = document.querySelectorAll('.photo-card img')[2]
photoItem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrXPiQcj25vya6gJ71K_9W_4TSLoNPMEaXQ&usqp=CAU"

//6번
const photoNameSearched = document.querySelectorAll('.photo-name')[4]
photoNameSearched.innerText = "sunrise"


//7번
const modalWindowSearched = document.querySelector('.modal-window')
modalWindowSearched.classList.add('hide')



// function buildElement(tagName, attributes, elements){
//     const el = document.createElement(tagName)

//     for(let key in attributes){
//         console.log(key,attributes[key])
//     }
//     for(let element of elements){
//         if(typeof element === 'string'){
//             el.innerText = element
//         }
//         else{
//             el.appendChild(element)
//         }
//     }
//     return el
// }

// const menu1 = buildElement('div',{'id':'menu1'},[
//     buildElement('div',{'className':'bar'},[]),
//     buildElement('img',{'className':'bar'},[]),
//     buildElement('div',{'className':'bar'},[])
// ])

// document.body.appendChild(menu1)