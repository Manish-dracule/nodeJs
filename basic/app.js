// 3rd party package goes below
const express = require('express')
const bodyParser = require('body-parser')
// other local modules
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(adminRoutes)
app.use(shopRoutes)


app.listen(3000)