const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('card', { 
    prompt: "Who is buriednin Grant's tomb?",
    hint: "Think about whose tomb it is"
  })
})

module.exports = router