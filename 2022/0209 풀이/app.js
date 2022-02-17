// //1번
// const fruit = 'apple'
// let printB = null

// function printA(){
//     const fruit = 'banana'
//     
//     printB = function(){
//         console.log(fruit)
//     }
//     printB()
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

// function filterSeoul(el){
//     return (el.city ==='seoul')
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
//     let ret = 1
//     for(let i=0 ; i<b; i++){
//         ret *= a
//     }
//     return ret
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
const insults = ['바보', '똥개', '그지']


function separateStr(str, delimeter){
    let strSeparated = str.split(delimeter)  //기억하고 있어야 할 배열
       
    function filterKeyword(keyword){
        strSeparated = strSeparated.filter(word => !word.includes(keyword))
        return strSeparated
    }
    return filterKeyword
}

const filterKeyword = separateStr(comment,' ')
let ret = null
for(let i in insults){
    ret = filterKeyword(insults[i])
}

console.log(ret)

//5번
const animals = ['cat', 'lion', 'turtle', 'dog', 'pig']
const fruits = ['apple', 'banana', 'strawberry', 'pineapple', 'pear']

function selectCategory(category){
    function searchItem(key){
        return category.filter(item => item === key)[0]
    }
    return searchItem
}

const searchAnimal = selectCategory(animals)
const searchFruit = selectCategory(fruits)

console.log(searchAnimal('turtle')) // searchAnimal 내부의 category 변수에는 접근하지 못하고 수정도 못함 (캡슐화, 은닉화)
console.log(searchAnimal('pig')) // 동물 카테고리에서만 검색한다는 함수의 역할이 명확히 드러남
console.log(searchAnimal('banana'))

console.log(searchFruit('strawberry')) // 서로 다른 기능을 하는 함수 생성
console.log(searchFruit('apple'))
console.log(searchFruit('lion'))


//6번

const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]


function createPerson(name, age, city, friends){
    let _friends = JSON.parse(JSON.stringify(friends)) // 프라이빗 멤버변수를 보호하기 위하여 깊은복사로 저장함

    return {
        name, // 퍼블릭 멤버변수
        age,  // 퍼블릭 멤버변수
        city, // 퍼블릭 멤버변수

        get friends(){
            return JSON.parse(JSON.stringify(_friends)) // 프라이빗 변수를 보호하기 위하여 깊은복사로 조회함
        },
        filterFriendsInMyCity(){ 
            return this.friends.filter(friend => friend.city === this.city) 
        }
    }
}


const person = createPerson('영희', 23, 'daegu', friends)

console.log(person.friends === friends) // 전역변수 friends 와 프라이빗변수 _friends 주소가 다름을 확인함 (복사본을 저장하기 때문)
person.friends[0].name =  "태양" // 프라이빗 변수 _friends 를 변경하지 못함 (복사본을 조회하기 때문)

console.log(person.friends) 
console.log(person.filterFriendsInMyCity())

const person2 = createPerson('철수', 35, 'seoul', friends)
console.log(person2.friends) 
console.log(person2.filterFriendsInMyCity())

person2.name = "길동" // name 은 퍼블릭 멤버변수이므로 변경이 가능함
console.log(person2.name)
