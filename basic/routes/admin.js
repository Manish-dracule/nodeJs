const { text } = require('body-parser')
const express = require('express')

const router = express.Router()

router.get('/add-product', (req,res,next)=>{
    res.send('<form action="/product" method="post"><input type="text" /><button type="submit">ADD</button></form>')
})

router.post('/product',(req,res,next)=>{
    res.redirect('/')
})
module.exports = router