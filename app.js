const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.send('<h1>I Love Treehouse</h1>')
})

app.get('/hello', (req, res) => {
  res.send('<h1>Do you love Treehouse too?</h1>')
})

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
})