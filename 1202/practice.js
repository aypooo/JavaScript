// //1번 

//const boxs = document.querySelectorAll('.box')

// function rgbChange(e){
   
//         const r = Math.floor(Math.random()*256)
//         const g = Math.floor(Math.random()*256)
//         const b = Math.floor(Math.random()*256)
//         e.target.style.background = `rgb(${r},${g},${b})`
// }

// for(let box of boxs){
//     box.addEventListener('click',rgbChange)
// }

function creatImage(e){
    const mouseX = e.clientX
    const mouseY = e.clientY
    const circle = document.createElement('div')
    circle.classList.add('circle')
    document.body.append(circle)
    circle.style.left = mouseX + 'px'
    circle.style.top = mouseY + 'px'
    
}


window.addEventListener('mouseover',creatImage)