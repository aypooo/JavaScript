// //1번
// const fruit = 'apple'
// let printB = null

// function printA(){
//     const fruit = 'banana'
//     console.log(fruit)
//     printB = ()=>{
//         console.log(fruit)
//     }
// }

// printA() // banana
// printB() // banana

// //2번
// function filter(func, array){
//     let innerArray = new Array
//     for(let arr of array){
//         if(filterSeoul(arr))
//         innerArray.push(arr)
//     }
//     return innerArray
// }

// function filterSeoul(e){
//     return (e.city ==='seoul')
// }

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// const seoulFriends = filter(filterSeoul, friends)
// console.log(seoulFriends)


// //3번
// function add(a, b){
//     return a + b
// }
// function subtract(a, b){
//     return a - b
// }
// function multiply(a, b){
//     return a * b
// }
// function divider(a, b){
//     return a / b
// }
// function pow(a, b){
//     return a**b
// }

// function calculator(mode, a, b, ...funcs){
//     let ret = null
//     switch(mode){
//         case '+':
//             ret = funcs[0](a, b)
//             break
//         case '-':
//             ret = funcs[1](a, b)
//             break
//         case '*':
//             ret = funcs[2](a, b)
//             break
//         case '/':
//             ret= funcs[3](a, b)
//             break
//         case '^':
//             ret = funcs[4](a, b)
//             break
//     }
//     return ret
// }

// // 테스트 케이스
// const ret1 = calculator('+', 3, 4, add, subtract, multiply, divider, pow)
// const ret2 = calculator('-', 3, 4, add, subtract, multiply, divider, pow)
// const ret3 = calculator('*', 3, 4, add, subtract, multiply, divider, pow)
// const ret4 = calculator('/', 3, 4, add, subtract, multiply, divider, pow)
// const ret5 = calculator('^', 3, 4, add, subtract, multiply, divider, pow)

// console.log(ret1)
// console.log(ret2)
// console.log(ret3)
// console.log(ret4)
// console.log(ret5)

//4번
const comment = '너는 진짜 못말리는 바보 똥개 그지다 !'
function separateStr(str, delimeter){
    return str.split(delimeter)    
}

let strSeparated = separateStr(comment, ' ')

for(let insult of insults){
    strSeparated = filterKeyword(strSeparated, insult)
}
return strSeparated
function findShit(comment){
    const insults = ['바보', '똥개', '그지']
    
    function filterKeyword(arr, keyword){
        return arr.filter(word => !word.includes(keyword))
    }
    
    
    
}

const find1 = findShit(comment) 
console.log(find1)