const Player = require('./models/team')
const db = require('./db')

const syncAndSeed = async() => {
    await db.sync({force: true})
    const [Aubameyang, Lacazette, Pepe, Xhaka, Ceballos, Saka, Bellerin, Holding, Luiz, Tierney, Martinez] = await Promise.all([
        Player.create({name: 'Pierre-Emerick Aubameyang', number: 14, position: 'forward'}),
        Player.create({name: 'Alexandre Lacazette', number: 9, position: 'forward'}),
        Player.create({name: 'Nicholas Pepe', number: 19, position: 'forward'}),
        Player.create({name: 'Granit Xhaka', number: 34, position: 'midfield'}),
        Player.create({name: 'Dani Ceballos', number: 8, position: 'midfield'}),
        Player.create({name: 'Bukayo Saka', number: 7, position: 'midfield'}),
        Player.create({name: 'Hector Bellerin', number: 2, position: 'defense'}),
        Player.create({name: 'Rob Holding', number: 16, position: 'defense'}),
        Player.create({name: 'David Luiz', number: 23, position: 'defense'}),
        Player.create({name: 'Kieran Tierney', number: 3, position: 'defense'}),
        Player.create({name: 'Emiliano Martinez', number: 27, position: 'goalkeeper'})
    ])
}

module.exports = syncAndSeed