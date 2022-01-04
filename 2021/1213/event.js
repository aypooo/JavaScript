const parent = document.querySelector('.parent')
const child  = document.getElementById('child')

function hideParent(){
    console.log('parent clicked !')
    parent.classList.add('hide')
}
function popup(e){
    alert('child clicked !')
    e.stopPropagation() //이벤트 버블링 방지

}

function clickbody(){
    console.log('body clicked !')
}
//true면 이벤트캡쳐, flase면 이벤트버블링
parent.addEventListener('click',hideParent,false)
child.addEventListener('click',popup,false)
document.body.addEventListener('click',clickbody,false)