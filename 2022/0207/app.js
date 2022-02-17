// //1번

// function findMaxValue(...args){
//     let max = 0
//     for(let arg of args){
//         if(isNaN(arg)===false &&arg>max){
//              parseFloat(arg)
//              max=arg
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
//         function getInfo(){
//             return `${title}-${author}는 ${release}에 발매되었다.`
//         }
//         console.log(getInfo()) 
//     }
// }

// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")
// movie.printMovieInfo()

//3번


// //4번
// // countDuplication 함수 구현하기 

// function countDuplication(frag, ...args){
//     console.log(args)
//     let cnt = 0
//     for(let arg of args){
//         if(arg === 'cat'){
//             cnt++
//         }
        
//     }
//     return cnt

// }

// // 테스트 케이스 
// console.log(countDuplication('cat', 'apple', 'cat',
//  'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) // 4

// //5번
// function add(...args){
//     let sum = 0
//     for(let arg of args){
//         if(Number(arg)>0 ){
//             sum += Number(arg)
//         }
//     }
//     return sum
// }

// // 테스트 케이스
// console.log(add(3, null, 19, false, '9', [], 7, {}, '',
//  34, 'earth', '3.9')) // 75.9

// //6번

// function divider(flag,...args){
//         let array = new Array
        
//         for(let arg of args){
//             if(flag !== 0){
//                 array.push(arg/flag)
//             }
//             else
//                 array.push(arg)
//         }
//         return array

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