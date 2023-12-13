const express = require('express')
const path = require('path')
module.exports = (app) => {
  
  
  app.get('/', (req, res) => {

    res.status(200).sendFile(path.join(__dirname, 'views/index.html'))
  })

  // criar candidato 
  const routerCandidato = express.Router()

  routerCandidato.post('/', async (req, res) => {
    console.log(req.body)
    return res.status(201).json({ message: "Criado com sucesso!"})
  })


  app.use('/candidato', routerCandidato)
}