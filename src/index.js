const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000;

console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.listen(PORT, () => console.log(`Bootcamp-eo running in http://localhost:${PORT}`))
