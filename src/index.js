const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes');
const models = require('./models');
const services = require('./services')
const app = express()
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json({ }))

services.database()
  .then((connection) => {
    models(app, connection)
    routes(app, connection)

    console.log("+ CONNEÇÂO COM DATABASE REALIZADA COM SUCESSO!")
  })
  .catch((error) => {
    console.log("- Erro ao connectar a database..!")
  })

app.listen(PORT, () => console.log(`Bootcamp-eo running in http://localhost:${PORT}`))
