const express = require("express")
const app = express()
const morgan = require('morgan')
const path = require('path')
const {db, Player, syncAndSeed} = require('./db')

app.use(morgan('dev'))
app.use(express.json())

//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.get('/api/players', async (req, res, next) => {
    try {
        let players = await Player.findAll()
        res.send(players)
    } catch(err){
        next(err)
    }
})

app.get('/api/players/:id', async(req, res, next) => {
    try {
        let player = await Player.findByPk(req.params.id)
        res.send(player)
    } catch(err){
        next(err)
    }
})

//require in your routes and use them on your api path
//reference juke workshop for router help

//404 handler

//500 handler

const PORT = 3000
const init = async function(){
    await syncAndSeed()
    app.listen(PORT, function(){
        console.log(`Server is listening on port ${PORT}`)
    })
}

init()