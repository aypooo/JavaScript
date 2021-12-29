// //1번
// const hundred = new Array(100).fill(0)

// for (let i=0;i<hundred.length;i++){
//     if ((i+1) % 3 === 0){
//         hundred[i] = i+1 
//     }
//     console.log(hundred[i])
   
// }


// //2번
// const alpabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// let sum = ""
// for(let i=1;i<alpabet.length;i++){
//     alpabet[i] = alpabet[i-1] +alpabet[i] 

// }
// console.log(alpabet)


// //3번
// for(let i=0;i<10;i++){
//     mul[i] = 3+i*3
// }
// console.log(mul)


// //4번
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// function randomStr(n){
//     const array = []
//     let ran = 0
//     for(let i=0;i<n;i++){
//         ran = Math.floor(Math.random()*26)
//         array[i]= ran 
//     }
//     return array
// }

// console.log(randomStr(3))
// console.log(randomStr(5))
// console.log(randomStr(7))
// //5번
// const mul = []

// for(let i=0;i<10;i++){
//     mul[i] = 3+i*3
//     if(mul[i]%6 ===0){
//         mul[i] = null
//     }
// }
// console.log(mul)


// //6번
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]
// //깊은복사 
// let movies_copied = []


//     for(let i=0;i<movies.length;i++){
//         movies_copied[i] ={}
//         for(let key in movies[i]){
//             movies_copied[i][key]= movies[i][key]
//         }
      
//     }




// // movies.forEach((movie, index) => {//화살표 함수
// //     movies_copied[index] = {}
// //     Object.keys(movie).forEach(key=>movies_copied[index][key] = movie[key])
// // })

// // movies.forEach((movie, index) => movies_copied[index] = Object.assign({}, movie))//assign


// movies[1].title = 'syleemomo' // 원본배열 변경

// console.log(movies)
// console.log(movies_copied)

//7번
const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level'
]

function isPalindrome(word) {
    let same = true
    for(let i=0;i<word.length;i++){
        
        if(word.charCodeAt(i) !== word.charCodeAt(word.length-1-i)){
            console.log(word.charCodeAt(i))
            return same = false
        }
    }
    return same
}
let count = 0
for(let word of words){
    if(isPalindrome(word)){
        count++
    }
}
console.log(count)