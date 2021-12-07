let fs = require('fs')

let info = fs.readFileSync("newCategory.json", 'UTF-8')
let productInfo = fs.readFileSync('product.json', 'UTF-8')
let productArr = productInfo ? JSON.parse(productInfo) : []
let arr = info ? JSON.parse(info) : []
let obj = {}

for(let i of arr){
    let count = 0 
    let filtered = productArr.filter(el => el.category == i.categories)
    for(let j of filtered) {
        count += j.count
    }
    i.count = count
}
console.table(arr)

    
