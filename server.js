const dotenv = require('dotenv').config()
const express = require('express')
const  {db} = require('./app/model/index');

    (async() => {
        try {
            db.sequelize.sync()

        } catch (err) {
            console.log("something wend wrong");
        }

    })();
    
const app = express()

app.use(express.json())

app.listen(3000, console.log("server is listening port 3000"))