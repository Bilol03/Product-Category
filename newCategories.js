let fs = require('fs')

let [,,name] = process.argv
let data = fs.readFileSync("newCategory.json", 'UTF-8')
let arr = data ? JSON.parse(data) : []
let obj = {}
let id = parseInt(Math.random() * 1000)
id = id >= 1000 ? id : +(id * 1000).toString().slice(0, 4)
let filtered = arr.filter(el => el.categories == name)
if(filtered.length) return console.log("Bu Kategoriya avval kiritilgan");

obj.id = id
obj.categories = name
obj.count = 0
arr.push(obj)
fs.writeFileSync('newCategory.json', JSON.stringify(arr,null,4))