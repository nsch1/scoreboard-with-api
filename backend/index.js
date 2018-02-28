const express = require('express')
const app = express()
const sequelize = require('./database')
const db = sequelize.client
const Player = sequelize.Player
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(3001, () => console.log('Express listening on port: 3001'))

app.get('/', (req, res) => {
  res.json({ message: 'hello' })
})

app.get('/players', (req, res) => {
  Player.findAll()
    .then(players => {
      res.json({ players })
    })
    .catch(err => {
      res.json({ err })
    })
})

app.put('/players/:id', (req, res) => {
  const playerId = Number(req.params.id)
  const scoreUpdate = req.body

  Player.findById(playerId)
    .then(player => {
      return player.update(scoreUpdate)
    })
    .then(updatedPlayer => {
      res.json(updatedPlayer)
    })
    .catch(err => {
      res.status(500).send({
        message: 'Something went wrong',
        err
      })
    })
})