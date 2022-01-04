//9번
// import apiData from "./apiData.js"S
console.log(apiData)
// const API_URL = 
// import apiData from "./api.json"
const button = document.getElementById('price-btn')
const rootDiv = document.getElementById('root')
const apiDataRefined = apiData.map(buildElement)
const sortedProduct = apiData.sort(priceSort).map(buildElement)
let click = false

function buildElement(product){
    const item = document.createElement('div')
    item.className = 'product'
    item.innerHTML = `
        <div class = 'product-img'><img src=${product.image_link} alt= ${product.name}/></div>
        <div class = 'product-name'>${product.name} (${product.price})</div>
        <div class = 'product-description'>${product.description}</dic>`
    return item
}
function displayProduct(apiData){
        rootDiv.appendChild(apiData)
}
function priceSort(a,b){
    return a.price-b.price

}
    if(click === false){
        console.log("0")
        apiDataRefined.forEach(displayProduct)
    }
function lowerPrice(e){
    
    if(click === true){
        console.log("1")
        rootDiv.innerHTML =" "
        sortedProduct.forEach(displayProduct)
        click = false
    }
    else{
        console.log("2")
        rootDiv.innerHTML =" "
        apiDataRefined.forEach(displayProduct)
        click = 
    }
}



button.addEventListener('click',lowerPrice)