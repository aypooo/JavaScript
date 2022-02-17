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

// //4번
// const comment = '너는 진짜 못말리는 바보 똥개 그지다 !'
// function separateStr(str, delimeter){
//     return str.split(delimeter)    
// }

// let strSeparated = separateStr(comment, ' ')

// for(let insult of insults){
//     strSeparated = filterKeyword(strSeparated, insult)
// }
// return strSeparated
// function findShit(comment){
//     const insults = ['바보', '똥개', '그지']
    
//     function filterKeyword(arr, keyword){
//         return arr.filter(word => !word.includes(keyword))
//     }
    
    
    
// }

// const find1 = findShit(comment) 
// console.log(find1)


// //5번

// const animals = ['cat', 'lion', 'turtle', 'dog', 'pig']
// const fruits = ['apple', 'banana', 'strawberry', 'pineapple', 'pear']

// function searchItemInCategory(category, key){
//     return category.filter(item => item === key)[0]
// }

// console.log(searchItemInCategory(animals, 'turtle')) // searchItemInCategory 내부의 category 변수에는 접근하지는 못하지만 외부인자에 의하여 수정이 가능함
// console.log(searchItemInCategory(animals, 'pig'))
// console.log(searchItemInCategory(animals, 'banana'))

// console.log(searchItemInCategory(fruits, 'strawberry'))
// console.log(searchItemInCategory(fruits, 'apple'))
// console.log(searchItemInCategory(fruits, 'lion'))


// //6번

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

// function Person(name, age, city, friends){
//     this.name = name
//     this.age = age
//     this.city = city

//     // 초기값이 배열이나 객체인 경우 깊은복사로 저장 및 조회하기
//     let _friends = JSON.parse(JSON.stringify(friends)) // 전역변수 friends 는 참조만 하고 프라이빗 변수 _friends 는 외부에서 변경하지 못하도록 깊은복사로 저장함

//     this.getFriends = function(){
//         return JSON.parse(JSON.stringify(_friends)) // 프라이빗 변수 _friends 를 보호하기 위하여 깊은복사로 조회함
//     }

// }
// Person.prototype = {
//     get friends(){
//         return this.getFriends() 
//     },
//     filterFriendsInMyCity(){ 
//         return this.friends.filter(friend => friend.city === this.city) 
//     },
// }


// const person = new Person('영희', 23, 'daegu', friends)

// console.log(person.friends === friends) // 전역변수 friends 와 프라이빗변수 _friends 주소가 다름을 확인함 (복사본을 저장하기 때문)
// person.friends[0].name =  "태양" // 프라이빗 변수 _friends 를 변경하지 못함 (복사본을 조회하기 때문)

// console.log(person.friends) 
// console.log(person.filterFriendsInMyCity())

// const person2 = new Person('철수', 35, 'seoul', friends)
// console.log(person2.friends) 
// console.log(person2.filterFriendsInMyCity())