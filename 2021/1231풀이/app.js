// //1번

// const lyrics = `
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 바라보는 눈빛 속에
// 눈빛 속에 나는 마치
// 나는 마치 뭐에 홀린 놈
// 이젠 벗어나지도 못해
// 걸어오는 너의 모습
// 너의 모습 너는 마치
// 내 심장을 밟고 왔나봐
// 이젠 벗어나지도 못해
// 어딜 가나 당당하게
// 웃는 너는 매력적
// 착한 여자 일색이란
// 생각들은 보편적
// 도도하게 거침 없게
// 정말 너는 환상적
// 돌이킬 수 없을만큼
// 네게 빠져 버렸어
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따 따라빠빠라
// Hey girl gir gir gir gir girl i
// 눈만뜨면 니 생각 Hey girl
// 자나깨나 사실 너 하나 밖에 안보여
// 말해봐 니 맘에 내가
// 말해봐 자리 잡았는지
// 말해줘 내게 말해줘
// 나는 바보 바보 바보
// 주변 사람들은 말해
// 내가 너무 적극적
// 이 세상에 그런 사람
// 어디 한둘이냐고
// 그걸 몰라 그녈 몰라
// 시기하며 하는 말
// 내가 부럽다면 그건
// 그대들이 지는 거
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따라라라
// 딴딴 딴따다 따 따라빠빠라
// Lets dance dance dance dance
// Lets dance dance dance dance
// Lets dance dance dance dance dance dance
// Hey 이제 그만 내게 와줄래
// 정말 미칠 것만 같아 yeah
// 난 너만 사랑하고 싶어
// 절대 다시 한눈 팔 생각 없어 hey hey hey.
// 애인이라기보다 친구같은
// 내가 되고 싶어
// 너의 모든 고민 슬픔
// 함께 간직하고파
// 다시 없을 만큼 만큼
// 너를 너무 사랑해
// 내가 바란 사람 니가 바로 그
// That that that girl
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// `
// const keyword1 = 'Sorry'
// const keyword2 = '부셔'

// function searchWord(keyword, n){
//     const serachedIndexes = []
//     let foundIndex = lyrics.indexOf(keyword)

//     while(foundIndex != -1){
//         serachedIndexes.push(foundIndex)
//         foundIndex = lyrics.indexOf(keyword, foundIndex+n)

//     }
//     return serachedIndexes.length

// }

// console.log(searchWord(keyword1, keyword1.length))
// console.log(searchWord(keyword2, keyword2.length))

// //2번
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// //아래 movies 배열에서 영화 발매일이 2005년과 2010년 사이 영화중 
// // 검색되는 영화를 추출해보자. find 메서드를 사용하고, 반환값은 객체이다. 

// function findMovie(movie,index,movies){
//     const year = movie.release.split('-')[0]
//     return year>2005 && year <2010
   
// }

// const found = movies.find(findMovie)
// console.log(found)


// //3번
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// function findMan(movie,index,movies){
//     return movie.title.includes('man')
// }
// movies.find(findMan)
// console.log(movies.find(findMan))

//4번

// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]
// function findMan(movie,index,movies){
//     return movie.release.split('-')[0] <2010 && movie.title.startsWith('J')
    
// }
// movies.find(findMan)
// console.log(movies.find(findMan))

// //5번
// const words = [
//     'abc',
//     'animal',
//     'fruit',
//     'abba',
//     'abcba',
//     'location',
//     'radar',
//     'madam',
//     'mario',
//     'level'
// ]
// //아래 words 배열에서 a 가 한번 이상 들어가는 모든 단어를 출력해보자!

// words.forEach(word =>{
//     if(word.indexOf('a')>-1){
//         console.log(word)
//     }
// })

// //6번

// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     console.log(products)
    
//     products.forEach(product => {
//         if(product.product_type === 'mascara' && parseInt(product.price) <10){
//             console.log(product)
//         }
        
//     });
// })

// //8번

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

// const friendsFilter = friends.filter(friend =>friend.city === "seoul" && friend.age <30)
    
// console.log(friendsFilter)
    

// //9번
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
// const classifiedCity = {}

// function classify(friend){
//     if(!classifiedCity[friend.city]){
//         classifiedCity[friend.city] = 0
//     }
//     classifiedCity[friend.city]++
// }

// friends.forEach(classify)


// for(let prop in classifiedCity){
//     console.log(prop, ':',classifiedCity[prop])
// }


// //11번 
// const users = [
//     {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//     {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//     {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
//     {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
//     {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
//     {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//     {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
//     {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//     {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//     {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// let filteredUsers = null
// function ageIsValid(user){
//     return user.age >0 && parseInt(user.age) === user.age
// }

// function emailIsValid(user){
//     return user.eamil.indexOf('@')>-1 && user.eamil.indexOf('.com')>-1
// }

// filteredUsers = users.filter(ageIsValid)

// filteredUsers = filteredUsers.filter(emailIsValid)

//12번

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
    const item = document.createElement('div')
    item.className = 'product'
    item.innerHTML = `
        <div class = 'product-img'><img src=${product.image_link} alt= ${product.name}/></div>
        <div class = 'product-name'>${product.name} (${product.price})</div>
        <div class = 'product-description'>${product.description}</div>`
        
    return item
}   

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
   const rootDiv = document.getElementById('root')
   rootDiv.appendChild(product)
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
})