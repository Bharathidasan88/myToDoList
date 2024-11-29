
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    port: process.env.port,
    host: process.env.host,
    dialect: 'mysql'
})

async function connectionDb() {
    try {
        await sequelize.authenticate()
        console.log('it connected to database')
    } catch (err) {
        console.log("something wend wrong ", err);

    }
}

connectionDb()

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./users').User({ sequelize, Sequelize })
db.toDoList = require('./toDoList').toDoList({ sequelize, Sequelize })
db.appConfig = require('./appConfig').appConfig({ sequelize, Sequelize })

module.exports = {db} 