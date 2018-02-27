const express = require('express')
const app = express()
const db = require('./database')

app.listen(3001, () => console.log('Express listening on port: 3001'))

app.get('/', (req, res) => {
  res.json({ message: 'hello' })
})