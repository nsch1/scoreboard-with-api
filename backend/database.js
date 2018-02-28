const Sequelize = require('sequelize')
//const client = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

const client = new Sequelize(
  'postgres',
  'postgres',
  'secret',
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});

client
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.lot('Unable to connect to the database:', err)
  })

const Player = client.define('Player', {
  name: Sequelize.STRING,
  score: Sequelize.INTEGER
}, {
  tablename: 'Players'
})

module.exports = {
  client: client,
  Player: Player
}