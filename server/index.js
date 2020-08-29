const express = require("express")
const app = express()
const morgan = require('morgan')
//require db from /db


app.use(morgan('dev'))
app.use(expres.json())
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use('/public', express.static(path.join(__dirname, 'public')))
//still need to install path (not sure if dev dependency or not - also unsure of path)
//app.use('/public', express.static(path.join(__dirname, 'server/public')))

//require in your routes and use them on your api path
//reference juke workshop for router help

//404 handler

//500 handler

const PORT = 3000
const init = async function(){
    //await syncAndSeed()
    app.listen(PORT, function(){
        console.log(`Server is listening o port ${PORT}`)
    })
}

init()