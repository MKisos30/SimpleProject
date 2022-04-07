const express = require('express')
const app = express();
const PORT = process.env.PORT || 1234

app.use(express.static("public")) //public folder

//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))

//ROUTER
const index = require('./router')
const about = require('./router/about')
const places = require('./router/places')

app.use('/', index)
app.use('/about', about)
app.use('/places', places)

app.listen(PORT, () => {
    console.log(`listner on http://localhost:${PORT}`)
})