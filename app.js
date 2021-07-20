const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.set('view engine', 'pug')

const mainRoutes = require('./routes')
const cardRoutes = require('./routes/cards')

app.use(mainRoutes)
app.use('/cards', cardRoutes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('The application is running on localhost:3000')
})