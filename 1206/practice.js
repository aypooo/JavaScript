const box = document.querySelectorAll('.box')
let cnt = 0
let prev = 0
function moveBox(){
    box[prev].style.marginBottom =  0 + 'px'
    box[cnt].style.marginBottom =  50 + 'px'
    prev = cnt
    cnt++
    if(cnt>box.length-1){
        cnt = 0
    }
    //index = index === box.length-1 ? 0: cnt +1

}


function startMove(){
    setInterval(moveBox,500)
}

window.addEventListener('load',startMove)