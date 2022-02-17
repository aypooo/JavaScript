// const userName = document.getElementById('user-name') // 사용자 이름 입력창
// const userEmail = document.getElementById('user-email') // 사용자 연락처 입력창
// const userAge = document.getElementById('user-age') // 사용자 나이 입력창
// const userList = document.getElementById('user-list') // 사용자 리스트 출력 위치

// const submitBtn = document.getElementById('user-add') //  사용자 추가 버튼
// const users = [] // 사용자 리스트 배열

// // 입력창 유효성 검증
// function isValid(str){
//     return str !== '' && str !== undefined
// }

// // user 정보로부터 user 에 대한 DOM 객체 생성 및 반환
// function buildElement(user){
//     const userEl = document.createElement('div')
//    	userEl.className = "user-info"
//     userEl.innerHTML = `
//         <div class = 'name'>name:${userName}</div>
//         <div class = 'age'>age:${userAge}</div>
//         <div class = 'email'>email:${userEmail}</div>
//     `
//     return userEl
// }
// // users 배열을 이용하여 화면에 사용자 리스트 보여주기
// function displayUsers(users){
// 	const userList = getElementById('user-list')
//     userList.appendChild(users)
//     initInput()
// }

// // 입력창 초기화
// function initInput(){
//     userName.value = ''
//     userEmail.value = ''
//     userAge.value = ''
// }

// // 사용자 추가하기
// function addUser(){
// 	users.push(buildElement)

// }

// submitBtn.addEventListener('click', addUser)

// users.forEach(displayUsers)

// //2번
// const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
// const companiesReversed = []
// const leng = companies.length

// for(let i=0;i<leng;i++)
//     companiesReversed[i] = companies.pop()

// console.log(companiesReversed)

// //3번
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
// const newFriends = [
//     {name: 'Ami', aage: 27, city: 'ulsan'},
//     {name: 'gracias', aage: 21, city: 'ulsan'},
// ]

// friends.splice(2,0,...newFriends)

// console.log(friends)


// //4번
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

// friends.splice(4,2)

// console.log(friends)

// //5번
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

// friends.filter(friend => friend.city !=='seoul')
// console.log(friends)

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

// function compareAge(a,b){
//     return a.age-b.age

// }

// friends.sort(compareAge)
// console.log(friends)
// const friendIndex = []
// friends.forEach((friend,index,friends)=> {
//     if(friend.age>30){
//         friendIndex.push(index)
//     }
// })
// friends.splice(friendIndex[0],friendIndex.length)

// console.log(friends)

// //7번

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
// function compareName(a,b){
//     return a.name[0].charCodeAt()-b.name[0].charCodeAt()

// }

// friends.sort(compareName)
// console.log(friends)

// //8번
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Terminator', release: '2007-04-11'},
//     {title: 'Dracula', release: '2007-04-13'},
//     {title: 'Jurassic Park', release: '2007-05-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// function compareRelease(a,b){
//     return a.release.split('-')[0]-b.release.split('-')[0]
// }

// movies.sort(compareRelease)

// console.log(movies)

//9번

