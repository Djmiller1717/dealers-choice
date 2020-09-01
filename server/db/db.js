const Sequelize = require("sequelize")
const db= new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/arsenal', {
    logging: false
});

module.exports = db
