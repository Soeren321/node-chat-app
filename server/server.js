const express = require('express')
const path = require('path')

const port = process.env.Port || 3000
let app = express()

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Server is up at port ${port}`)
})