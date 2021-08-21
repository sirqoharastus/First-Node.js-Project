const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile('./views/index.html', {root:__dirname})
  })

app.get('/contact',(req, res) =>{
  res.sendFile('./views/contact.html', {root:__dirname})
})
app.use((req, res) =>{
  res.statusCode = 404
  res.sendFile('./views/404.html', {root:__dirname})
})

app.listen(3000)