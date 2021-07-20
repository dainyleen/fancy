const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')

app.use((req, res, next) => {
  console.log('Hello')
  const err = new Error('Something went wrong!')
  err.status = 500
  next(err)
})

app.use((req, res, next) => {
  console.log(req.message)
  next()
})

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
  const name = req.cookies.username 
  if (name) {
    res.redirect('/')
  } else {
    res.render('hello')
  }
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello')
})

app.use((err, req, res, next) => {
  res.locals.err = err
  res.status(err.status)
  res.render('error', err)
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})