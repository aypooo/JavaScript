const colorBox = document.querySelector('.color-box')
const colorList = document.querySelector('.color-list')
const colorInput = document.getElementById('color-input')

const colors = ['orange','blue','brown','green','red', 'skyblue']
let index = -1
let prevIndex = -1

function addColors(colors){
    for(let color of colors){
        const item = `<div class = 'color-item'>${color}</div>`
        colorList.innerHTML += item
    }
}

function typeColor(e){
    console.log(e.target.value)//사용자 입력한 문자열

    if(e.target.value !== ''){
        console.log('you typed something')
        colorList.classList.add('show')//색상 목록을 디스플레이함
        colorInput.addEventListener('keyup', selectColor)
    }else{//아무것도 입력하지 않았을때
        console.log('you didn\'t type anything')
        colorList.classList.remove('show')//색상 목록을 사라지게 함
        colorInput.removeEventListener('keyup', selectColor)
    }
    
}

function setBackground(color){
    console.log('you picked color !', color)
    colorInput.value = color
    colorList.classList.remove('show')
    colorBox.style.background = color
    colorInput.removeEventListener('keyup', selectColor)
}


function setColor(e){
    console.log(e.target)

    if(e.target.className === 'color-item'){
        const pickedColor = e.target.innerText
        console.log('you picked color !'. pickedColor)
        colorInput.value = pickedColor//입력창의 글자가 사용자가 선택한 색상으로 변경
        colorList.classList.remove('show')
        colorBox.style.background = pickedColor
    }
}
function changeHighLightItem(key){
    prevIndex = index //현재 사용자가 선택한 색상에 대한 인덱스값을 가져욤

    if(key === 40){
        index++
        if(index >colors.length-1){
            index =0
        }
        
    }else if(key === 38){
        index--
        if(index <0){
            index = colors.length -1
        }
    }else if(key === 13){
        const colorItem = document.querySelectorAll('color-item')[index]
        setBackground(colorItem.innerText)
        //TODO :: 배경색 변경(사용자가 배경색을 선택하면)
    }
}

function unsetHighLightColortItem(){
    if(prevIndex >=0){
        const colorItem = document.querySelectorAll('.color-item')[prevIndex]
        colorItem.classList.remove('highlight')
    }
}

function highLightColorItem(){
    if(index >= 0){
        const colorItem = document.querySelectorAll('.color-item')[index]
        colorItem.classList.add('highlight')
    }
}

function selectColor(e){
    console.log(e.keyCode)
    if(e.keyCode){
        changeHighLightItem(e.keyCode)//사용자가 선택한 색상에 대한 id 값
        unsetHighLightColortItem()
        highLightColorItem()
    }
}




addColors(colors)//화면에 색상 목록이 나타남
colorInput.addEventListener('input',typeColor)
colorList.addEventListener('click',setColor)