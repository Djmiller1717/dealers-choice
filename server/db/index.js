//import your db
const db = require('./db')
const Player = require('./models/team')
const syncAndSeed = require('./seed')

//state your model associations (hasOne etc)

module.exports = {
    db,
    Player,
    syncAndSeed
}