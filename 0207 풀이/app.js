// //1번

// function findMaxValue(...args){
//     let max = -Infinity
//     for(let arg of args){
//         if(max < parseFloat(arg)){
//              max = parseFloat(arg)
//         }
//     }
//     return max
    
// }

// // 테스트 케이스 
// console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
// console.log(findMaxValue(-31, 8, null, -26, false, 92, {},
//      284, 923, [], "2045.8", 'zip', 54, "1024"))


// //2번
// function Movie(title, author, release){
//     this.title = title
//     this.author = author
//     this.release = release

//     this.printMovieInfo = () => {
//         const getInfo = ()=>{
//             return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
//         }
//         console.log(getInfo()) 
//     }
// }

// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
// movie.printMovieInfo()

// //3번

// function getDistance(p1, p2 = {x: 0 , y: 0}){
//     return Math.sqrt( (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y) )
//  }
 
//  // 테스트 케이스
//  console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
//  console.log(getDistance({x: 3, y: 4}))


// //4번
// // countDuplication 함수 구현하기 

// function countDuplication(frag, ...args){
//     console.log(args)
//     let cnt = 0
//     args.forEach(arg =>{
//         if(arg === frag)cnt++
//        })
//     
//     return cnt
// }

// // 테스트 케이스 
// console.log(countDuplication('cat', 'apple', 'cat',
//  'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4

// //5번
// function add(...args){
//     let sum = 0
//     for(let arg of args){
//          sum += !isNaN(parseFloat(arg)) ? parseFloat(arg) : 0
//         }
//     }
//     return sum
// }

// // 테스트 케이스
// console.log(add(3, null, 19, false, '9', [], 7, {}, '',
//  34, 'earth', '3.9')) // 75.9

// //6번

// function divider(flag,...args){
//         if(flag === 0)return args
//         return args.map(arg => arg/ flag)

// }

// // 테스트 케이스 
// console.log(divider(2, 39, 4, 7, 28, 62, 28))
// console.log(divider(0, 39, 4, 7, 28, 62, 28))


// //7번
// const numbers = [121, 23, 345, 43, 59]

// function pickIndex(len){
//     return Math.floor(Math.random() * len)
// }
// let temp = 0
// let empty = 0
// function shuffle(arrs){
    
//     for(let i=0;i<arrs.length;i++){
//         empty = arrs[i]
//         temp = pickIndex(arrs.length)
//         arrs[i] = arrs[temp]
//         arrs[temp] = empty
//     }
//     return arrs
   
// }

// console.log(shuffle(numbers))