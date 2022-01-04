const photoContainer = document.getElementById('photo-container')
const photo_list = document.createElement('div')
photo_list.id = "photo-list"
const photoContnets= 9
const limite = Math.ceil(photoContnets/3)

for(let i=0; i<3;i++){
    const bar = document.createElement('div')
    bar.className ='bar'
    menu.appendChild(bar)
}

for(let i=0;i<photoContnets;i++){
    const photoBox = document.createElement('div')
    photoBox.className = 'photo-box'
    
    const image = document.createElement('img')
    image.src = "https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/02/urbanbrush-20200227023608426223.jpg"
    img.alt = "null"
    
    photo_list.appendChild(photoBox)
    photoContainer.appendChild(photo_list)
    
}