//const popup = document.getElementById('popup')
// // 1.프로퍼티 방식으로 클릭 이벤트가 등록된다
// popup.onclick = function(){
//     alert('팝업창')
// }
//// 2.Btn 방식
// function popupBtn(){
//     alert('팝업창')
//     popup.removeEventListener('click', popupBtn) //해체해서 한번만 실행된다
// }
// function setBtnColor(){
//     popup.style.background = 'skyblue'
// }
// function unsetBtnColor(){
//     popup.style.background = ''
// }

// popup.addEventListener('click',popupBtn)
// popup.addEventListener('mouseover',setBtnColor)
// popup.addEventListener('mouseout',unsetBtnColor)
//// 3.css에 연결해서 클릭시 스타일 변경
// function popupBtn(e){ 
//     console.log(e)
//     console.log(e.target)

//     e.target.classList.add('circle')//circle : 변경할 스타일의 클래스 명
// }

// popup.addEventListener('click',popupBtn)
// // 4. 이벤트 제한
// const form = document.querySelector('form')
// const id = document.querySelector('#user-id')
// const password = document.querySelector('#user-password')
// const p = document.querySelector('p')

// function login(e){
//     if(id.value === '' || password.value === ''){
//         e.preventDefault()
//         alert('아이디나 비밀번호가 입력되지 않았습니다!')
//     }else{
//         alert('login is processing...')
//     }
// }

// form.addEventListener('submit',login)
// // 5.인스턴스 메시지 
// const instantMsg = document.querySelector('.instant-msg')

// function showMsg(){
//     instantMsg.classList.add('show')
// }
// function hideMsg(){
//     instantMsg.classList.remove('show')
// }
// setTimeout(showMsg,1000)
// setTimeout(hideMsg,3000)
// // 시계
// const clock = document.getElementById('clock')

// function changeFormat(t){
//     return t < 10 ? `0${t}` : t
// }
// function getTime(){
//     const time = new Date()
//     const hours = time.getHours()
//     const minutes = time.getMinutes()
//     const seconds = time.getSeconds()

//     clock.innerHTML = `${changeFormat(hours)}:${changeFormat(minutes)}:${changeFormat(seconds)}`
// }

// setInterval(getTime, 1000)

// //6.마우스 이벤트, 원 이동
// const circle = document.getElementById('circle')

// function moveCircle(e){
//     console.log('move circle ~~~~~')
//     const mouseX = e.clientX//마우스 포인트의 x좌표
//     const mouseY = e.clientY//마우스 포인트의 y좌표
//     circle.style.left = mouseX + "px"
//     circle.style.top = mouseY + "px"
// }

// window.addEventListener('click',moveCircle)

// // 7. led 깜빡거리기
// const ledContainer = document.getElementById('led-container')
// const leds = document.querySelectorAll('.led')

// function lighton(e){

//     if(e.target.className === 'led'){
//         e.target.classList.add('on')
//     }
// }
// function lightoff(e){
//     if(e.target.className === 'led on'){
//         e.target.classList.remove('on')
//     }
// }

// ledContainer.addEventListener('mouseover', lighton)

// for(let led of leds){
//     led.addEventListener('mouseleave', lightoff)
// }
// //8.led 자동 깜빡
// let index = 0

// function lightoff(){
//     const led = document.querySelectorAll('.led')[index]
//     led.classList.remove('on')
// }
// function lighton(){
//     const led = document.querySelectorAll('.led')[index]
//     led.classList.add('on')
//     index++
  
//     if(index > 2){
//         index = 0
//     }
//     setTimeout(lightoff, 500)
// }

// function startEffect(){
//     console.log('load') 
//     setInterval(lighton,500)
// }

// window.addEventListener('load', startEffect)
// // 9.사이드 바
// const openBtn = document.getElementById('open-btn')
// const sidebar = document.querySelector('.sidebar')

// function openSidebar(){
//     sidebar.classList.add('show')
// }

// openBtn.addEventListener('mouseenter', openSidebar)