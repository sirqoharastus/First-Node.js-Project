const express = require('express')
const app = express()
const Item = require('./models/items')
const mongoDb = 'mongodb+srv://decagon:password1A@@cluster0.c7k4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log('connected')).catch(err => console.log(err))
app.set('view engine', 'ejs')

app.get('/create-items', (req, res)=>{
  const item = new Item({
    name:'phone',
    price: 1000
  })
  item.save().then(result=>res.send(result))
})
app.get('/', function (req, res) {
  const items = [
    {name:'mobile phone', price: 3000},
    {name:'book', price:30},
    {name: 'computer', price:2000}  
  ]
    res.render('index', {items})
  })

app.get('/add-item',(req, res) =>{
  res.render('add-item')
})
app.use((req, res) =>{
  res.statusCode = 404
  res.render('404')
})

app.listen(3000)