// // 사진 움직이기
// const photos = document.getElementById('photos')
// const options = document.querySelectorAll('.options')
// let timerID = null
// let cnt = 0
// let prevOption = 0

// function changePosition(){
//     const photoItems = document.querySelectorAll('.photo')
//     cnt = cnt === photoItems.length-1 ? 0 : cnt +1
//     photos.style.marginLeft= cnt*-500 + 'px' // 사진을 한장씩 이동시킴 
//     // 0 -500 -1000 -1500
    

//     options[prevOption].style.width = 20 +'px'// 이전 인덱스값으로 돌려놓음
//     options[cnt].style.width = 50 +'px'
//     options[cnt].style.borderRadius = '5px'
//     prevOption = cnt //현재 인덱스값 저장
// }

// function startCarousel(){
//     timerID = setInterval(changePosition, 1000)
// }

// function stopCarousel(){
//     clearInterval(timerID)
// }

// photos.addEventListener('mouseenter',startCarousel)
// photos.addEventListener('mouseleave',stopCarousel)


// //박스 움직이기
// const box = document.getElementById('box')
// const moves = [
//     {pos:'left',length:100},
//     {pos:'top',length:100},
//     {pos:'left',length:0},
//     {pos:'top',length:0},
// ]//움직임을 미리 정의
// let select = 0

// function moveBox(){
//     const pos = moves[select].pos
//     const length = moves[select].length
//     box.style[pos] = length +'px'//box가 움직임
//     select++
//     if(select > moves.length-1){
//         select = 0
//     }
// }

// function startMove(){
//     setInterval(moveBox,1000)
// }

// window.addEventListener('load',startMove)

// 아코디언 메뉴
const menuContainer = document.getElementById('menu-container')

function openMenu(e){
    const target = e.target
    if(target.className === 'title'){
        console.dir(target)
        target.nextElementSibling.classList.toggle('open')
    }
}

menuContainer.addEventListener('click', openMenu)