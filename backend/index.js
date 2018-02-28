const express = require('express')
const app = express()
const sequelize = require('./database')
const db = require('./models')
const { Player } = db
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
      console.error(err)
      res.status(500).json({ message: "Error getting the players. Try again." })
    })
})

app.get('/players/:id', (req, res) => {
  Player.findById(req.params.id)
    .then(player => {
      if (!player) return res.status(404).json({ message: "Player not found!" })
      res.json(player)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: "Error getting the players. Try again." })
    })
})

app.patch('/players/:id', (req, res) => {
  const players = Player
    .findById(req.params.id)
    .then((player) => {
      if (player) {
        player.score = req.body.score
        player
          .save()
          .then((updatedPlayer) => {
            res.json(updatedPlayer)
          })
          .catch((err) => {
            res.status(422)
            res.json({ message: err.message })
          })
      } else {
        res.status(404)
        res.json({ message: 'Player not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the player. Please try again' })
    })
})