const express = require('express')
const app = express();
const PORT = process.env.PORT || 1234

app.use(express.static("public"))

//EJS
app.set('view engine', 'ejs') //connecting ejs
console.log(app.get('view engine'))
// app.set('views')
const index = require('./router')
const about = require('./router/about')

app.use('/', index)
app.use('/about', about)

app.listen(PORT, () => {
    console.log(`listner on http://localhost:${PORT}`)
})