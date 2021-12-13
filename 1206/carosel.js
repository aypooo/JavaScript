const photos = document.getElementById('photos')
const option = document.querySelectorAll('.options')
let timerID = null
let cnt = 0
let prevOption = 0

function changePosition(){
    const photoItems = document.querySelectorAll('.photo')
    cnt = cnt === photoItems.length-1 ? 0 : cnt +1
    photos.style.marginLeft= cnt*-500 + 'px' // 사진을 한장씩 이동시킴 
    // 0 -500 -1000 -1500
    
    option[prevOption].style.backgroundColor = 'lawngreen' 
    option[prevOption].style.width = 20 +'px'// 이전 인덱스값으로 돌려놓음
    option[prevOption].style.height = 20 +'px'
    option[cnt].style.width = 25 +'px'
    option[cnt].style.height = 25 +'px'
    option[cnt].style.backgroundColor = 'greenyellow' 
    option[cnt].style.borderRadius = '50%'
    prevOption = cnt //현재 인덱스값 저장
}

function clickoptions(e){
    cnt = Array.from(option).indexOf(e.target)-1
    changePosition()
}
    


function startCarousel(){
    timerID = setInterval(changePosition, 2000)
}

function stopCarousel(){
    clearInterval(timerID)
}


window.addEventListener('load',startCarousel)
photos.addEventListener('mouseover',stopCarousel)
photos.addEventListener('mouseleave',startCarousel)

for(let options of option){
    options.addEventListener('click',clickoptions)
}
