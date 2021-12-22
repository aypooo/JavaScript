const colorBox = document.querySelector('.color-box')
const colorInput = document.getElementById('color-input')
const colorList = document.querySelector('color-list')


function rgbChange(){
   
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        return `rgb(${r},${g},${b})`
}

function setColor(e){
    console.log(e.target.value)
    colorBox.style.backgroundColor = rgbChange()
}

colorInput.addEventListener('input',setColor)