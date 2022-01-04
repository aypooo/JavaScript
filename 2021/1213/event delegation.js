const fruitContainer =document.getElementById('fruits')
let prevTarget = null
function moveToRight(e){

    if(prevTarget !== null){
        prevTarget.style.marginLeft ='0px'
    }
    const target = e.target
    console.log(target)
    if(target.className ==='fruit'){
        target.style.marginLeft = '100px'
        // target.classList.toggle('right') //토글방법
        prevTarget = target //현재 타겟 저장
    }
  

}


fruitContainer.addEventListener('click',moveToRight)
