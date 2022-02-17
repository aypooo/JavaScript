// // 1번
// // min ~ max 사이의 랜덤숫자를 생성하는 함수 (min, max 포함)
// function pickRandomNumber(min, max){
//     return Math.floor( Math.random() * (max-min+1) ) + min 
// }

// function Tester(sleepTime, wakeTime, wakeCnt, turnCnt, delta){
//     this.sleepTime = sleepTime
//     this.wakeTime = wakeTime
//     this.wakeCnt = wakeCnt
//     this.turnCnt = turnCnt
//     this.delta = delta
// }

// Tester.prototype = {
    
//     satisfaction(){
//        this._sleepSatisfaction = this.delta /(this.sleepTime*this.wakeTime*this.wakeCnt*this.turnCnt)
//     },

//     get sleepSatisfaction(){
//         return this._sleepSatisfaction
//     }
// }
// function sleepQuality(qos){
//     return qos >= 0.37 && qos<=50
// }

// function countQuality(group){
//     let cnt = 0
//     group.forEach(tester=>{
//         tester.satisfaction()
//         if(sleepQuality(tester.sleepSatisfaction))cnt++
//     })
//     return cnt
// }

// function createrTester(len){
//     const group = []
//     for(let i=0;i<len;i++){
//         group[i] = new Tester(
//         pickRandomNumber(1,10),
//         pickRandomNumber(1,10),
//         pickRandomNumber(1,5),
//         pickRandomNumber(1,10),
//         pickRandomNumber(0,50)
//         )
//     }
//     return group
// }



// const Agroup = createrTester(100)
// const Bgroup = createrTester(100)
// const Cgroup = createrTester(100)

// function chooseBestBed(a,b,c){
//     const counts = [
//         {group: 'A',cnt:a},
//         {group: 'B',cnt:b},
//         {group: 'C',cnt:c},
//     ]
//     counts.sort((c1,c2)=>c2.cnt-c1.cnt)
    
//     alert(`${counts[0].group} bed is choosen to a new bed this year!`)
// }


// chooseBestBed(
//     countQuality(Agroup),
//     countQuality(Bgroup),
//     countQuality(Cgroup)
// )


// console.log("A group cnt:",countQuality(Agroup))
// console.log("B group cnt:",countQuality(Bgroup))
// console.log("C group cnt:",countQuality(Cgroup))

// //2번
// function TrainFare(station,latitude,longitude){
//     this.station = station
//     this.latitude = latitude
//     this.longitude = longitude

    
// }

// TrainFare.prototype= {
//     distance(destination){
//         const R = 6371e3;
//         const latitude1 = this.latitude * Math.PI / 180
//         const latitude2 = destination.latitude * Math.PI / 180
//         const distanceLat = (destination.latitude - this.latitude) * Math.PI / 180
//         const distanceLon = (destination.longitude - this.longitude) * Math.PI / 180
//         const a = Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) + 
//             Math.cos(latitude1) * Math.cos(latitude2) * Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2)
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
//         return R * c
//     },
//     getPrice(destination){
//         return  parseInt(this.distance(destination)/1000*100)
        
//     }

// }

// const seoul = new TrainFare(
//     '서울역',
//     37.55620110026294,
//     126.97223116703012
// )
// const deajeon = new TrainFare(
//     '대전역',
//     36.332516127741,
//     127.43421099777726
// )
// const deagu = new TrainFare(
//     '대구역',
//     35.88049128950934,
//     128.62837657353532
// )
// const busan = new TrainFare(
//     '부산역',
//     35.116613680508806,
//     129.04009077373016
// )

// console.log(seoul.getPrice(deajeon))
// console.log(deajeon.getPrice(deagu))
// console.log(deagu.getPrice(busan)) 

//3번

const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

const personNum = 10000
const person = new Array
const classifiedFeatures = {}

function pickRandomFeature(feature){
    return feature[Math.floor( Math.random() * feature.length)]
}


function displayFeatures(features){
    const canvas = document.getElementById('canvas')
    for(let feature in features){
        const featureEl = document.createElement('div')
        featureEl.className = 'circle'
        featureEl.innerHTML=`
            <h1>${features[feature]}</h1>
            <div>${feature}</div>
        `
        canvas.appendChild(featureEl)
    }
}

function TestUser(hairColors,hairTypes,glasses,heights,weights){
    this.hairColors = hairColors
    this.hairTypes = hairTypes
    this.glasses = glasses
    this.heights = heights
    this.weights = weights

}

for(let i=0;i<personNum;i++){
    person.push(new TestUser(
        pickRandomFeature(hairColors),
        pickRandomFeature(hairTypes),
        pickRandomFeature(glasses),
        pickRandomFeature(heights),
        pickRandomFeature(weights)
    ))

}
//$$$다시 보기
person.forEach((person)=>{
    for(let feature in person){
        let featValue = person[feature]
        switch(feature){
            case 'glasses':
                featValue = featValue ? 'put on glasses' : 'no glasses'
                break
            case 'height':
                featValue = featValue + 'cm'
                break
            case 'weight':
                featValue = featValue + 'kg'
        }
        if(!classifiedFeatures[person[feature]]) classifiedFeatures[person[feature]] = 0
        classifiedFeatures[person[feature]]++
    }
    }
    
)
console.log(classifiedFeatures)

displayFeatures(classifiedFeatures)