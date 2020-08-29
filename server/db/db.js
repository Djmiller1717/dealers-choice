const Sequelize = require("sequelize")
const arsenal= new Sequelize('postgres://localhost/...', {
    logging: false
});
// if deployed
// const acme = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme', {
//     logging: false
// });

// module.exports = 
