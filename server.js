const express = require('express')
const app = express();
const PORT = process.env.PORT || 1234

app.get('/', (req, res) => {
    res.send('<h1>AAAAAAAAAAAAAA</h1>')
})

app.listen(PORT, () => {
    console.log(`listner on http://localhost:${PORT}`)
})