let fs = require('fs')

let data  = fs.readFileSync('product.json', 'UTF-8')

let arr = data ? JSON.parse(data) : []

console.table(arr)