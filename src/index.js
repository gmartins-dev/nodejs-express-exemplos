const express = require('express') //importando o projeto
const app = express() //chamando a função

app.get('/', function (req, res) {
  res.send('Hellooooo Worlddddd')
})

app.listen(3000, () => console.log('NODE RUNNING --> http://localhost:3000/'))