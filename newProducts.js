let fs = require('fs')
let [,,id, name] = process.argv
let data = fs.readFileSync('product.json', 'UTF-8')
let arr = data ? JSON.parse(data) : []

let categories = JSON.parse(fs.readFileSync('newCategory.json', 'UTF-8'))


let found = categories.find(el => el.id == id)
if(found == undefined) return console.log(("Bunaqa ID mavjud emas! "));

let productId = parseInt(Math.random() * 1000)
productId = productId >= 1000 ? productId : +(productId * 1000).toString().slice(0, 4)

sameProduct = arr.find(el => el.productName == name)
if(sameProduct) {
    ++arr[arr.indexOf(sameProduct)].count
}else {
    let obj = {
        id : productId,
        productName : name,
        count : 1,
        category : found.categories  
    }
    arr.push(obj)
}




fs.writeFileSync('product.json', JSON.stringify(arr, null, 4)) 