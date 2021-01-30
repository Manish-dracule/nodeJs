const { text } = require('body-parser')
const express = require('express')

const router = express.Router()
router.get('/',(req,res,next) =>{
    res.send('<h1>FISRT NODE APPLICATION</h1>')
})
module.exports = router