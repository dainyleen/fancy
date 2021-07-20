const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  const name = req.cookies.username 
  if (name) {
    res.render('index', { name })
  } else {
    res.redirect('/hello')
  }
})

app.get('/cards', (req, res) => {
  res.render('card', { 
    prompt: "Who is buriednin Grant's tomb?",
    hint: "Think about whose tomb it is"
  })
})

app.get('/hello', (req, res) => {
  res.render('hello')
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})