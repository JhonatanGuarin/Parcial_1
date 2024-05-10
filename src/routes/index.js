const router = require('express').Router()
const fs = require('fs')


const json_data = fs.readFileSync('src/data.json', 'utf-8')
let data = JSON.parse(json_data)
console.log(data)



router.get('/', (req, res) => {
    res.render('index.ejs', { products: data.products })
})

router.get('/sales', (req, res) =>{
    res.render('sales.ejs', { products: data.products })
})

module.exports = router