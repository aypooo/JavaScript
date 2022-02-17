//9번
// import apiData from "./apiData.js"S
console.log(apiData)
// const API_URL = 
// import apiData from "./api.json"
const button = document.getElementById('price-btn')
const rootDiv = document.getElementById('root')
const searchInput = document.getElementById('search-input')


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


const apiDataRefined = apiData.map(buildElement)
const sortedProduct = apiData.sort(priceSort).map(buildElement)

    if(click === false){
        console.log("0")
        apiDataRefined.forEach(displayProduct)
    }
function lowerPrice(e){
    rootDiv.innerHTML =" "
    if(click === true){
        console.log("false")
        sortedProduct.forEach(displayProduct)
        click = false
    }
    else{
        apiDataRefined.forEach(displayProduct)
        console.log("ture")
        click = true
    }
}

function searchItem(input){
    apiData.name.indexOf(input)

}



button.addEventListener('click',lowerPrice)
searchInput.addEventListener("input",searchItem)

