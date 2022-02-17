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
//        this.sleepSatisfaction = this.delta /(this.sleepTime*this.wakeTime*this.wakeCnt*this.turnCnt)
//     },

//     getter(){
//         return this.sleepSatisfaction
//     }
// }
// const Agroup = new Array();
// const Bgroup = new Array();
// const Cgroup = new Array();
// const testGroup = [Agroup,Bgroup,Cgroup]
// let aCnt = 0
// let bCnt = 0
// let cCnt = 0
// for(let group of testGroup){
//     for(let i=0;i<100;i++){
//         group[i] = new Tester(
//         pickRandomNumber(1,10),
//         pickRandomNumber(1,10),
//         pickRandomNumber(1,5),
//         pickRandomNumber(1,10),
//         pickRandomNumber(0,50)
//         )
//         group[i].satisfaction()
//         if (group[i].getter()>0.37 && group===Agroup){
//             aCnt++
//         }
//         if (group[i].getter()>0.37 && group===Bgroup){
//             bCnt++
//         }
//         if (group[i].getter()>0.37 && group===Cgroup){
//             cCnt++
//         }
// }
// }

// console.log("A group cnt:",aCnt)
// console.log("B group cnt:",bCnt)
// console.log("C group cnt:",cCnt)

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
function pickRandomNumber(min, max){
    return Math.floor( Math.random() * (max-min+1) ) + min 
}
const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
const classified = {}
function TestUser(hairColors,hairTypes,glasses,heights,weights){
    this.hairColors = hairColors
    this.hairTypes = hairTypes
    this.glasses = glasses
    this.heights = heights
    this.weights = weights

}


const person = new Array
for(let i=0;i<10;i++){
    person[i] = new TestUser(
        hairColors[pickRandomNumber(0,4)],
        hairTypes[pickRandomNumber(0,3)],
        glasses[pickRandomNumber(0,1)],
        heights[pickRandomNumber(0,5)],
        weights[pickRandomNumber(0,14)]
    )

}
//$$$다시 보기
person.forEach((person)=>{
    for(let feature in person){
        console.log(classified)
        if(!classified[person[feature]]) classified[person[feature]] = 0
        classified[person[feature]]++
    }
    }
    
)
console.log(classified)