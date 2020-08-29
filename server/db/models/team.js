const Sequelize = require("sequelize")
const db = require('../db')



//define any class or instance methods
const Player = db.define('player', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false
    },
    starter: {
        type: Boolean,
        defaultValue: false,
    }
    
})

module.exports = Player

