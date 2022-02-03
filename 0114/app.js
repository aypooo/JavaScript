// //1번
// const _2dArray = []
// let k= 0
// for(let i=0; i<5;i++){
//     const element = []
//     element.push(k+1)
//     element.push(k+2)
//     k += 2
//     _2dArray.push(element)
// }
// console.log(_2dArray)


// //2번
// function build2DArray(rows, columns){
//     const array = []
//     for(let i=0;i<rows;i++){
//         const element = new Array(columns)
//         element.fill(0)
//         array.push(element)
// }return array
// }
// console.log(build2DArray(7, 3))



// //3번
// const fruits = [['apple', 570], ['orange', 270], ['strawberry', 30]]

// for (let i in fruits){
//         fruits[i] = {'name': fruits[i][0],'price':fruits[i][1]}
//     }
// console.log(fruits)


// //4번
// const fruits = [['apple', 570, 32], ['orange', 270, 65], ['strawberry', 30, 120]]

// for (let i in fruits){
//     let price = fruits[i][1]*fruits[i][2]
//         fruits[i] = {'name': fruits[i][0],'totalprice':price}
//     }
// console.log(fruits)

//5번

const graph = document.getElementById('graph')

const points = []
const dx = 1 // degree
let x = 0 // degree
let y = 0
let radx = 0 // radian
let offset = 0
// 다음 (X,Y) 포인트 값 계산
function getNextPoint(){
    radx = x * (Math.PI / 180)
    y = Math.sin(radx)
    points.push([x, y])
    x += dx
    // console.log(points)
}


// (X,Y) 포인트 값으로부터 DOM 객체 생성 및 화면에 표시
function displayPoint(point){
    const pointEl = document.createElement('div')
    pointEl.className = 'dot'
    pointEl.style.left = `${point[0] * 2}px` // x-scale: 2배
    pointEl.style.top = `${point[1]* 100 * -1 + 100}px` // y-scale : 100배 (반전 + 좌표이동)
    graph.appendChild(pointEl)
}


// (X,Y) 포인트 값을 요소로 가지는 2차원 배열 생성

for(let i=0; i<720; i++){
    getNextPoint()
}
points.forEach(displayPoint)
setInterval(() => {
    points.forEach(displayPoint)
    points.splice(0,1)
    offset++
    console.log(points[0])
    console.log("움직여라!")
    
    
    
}, 1000);

