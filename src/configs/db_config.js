const {Sequelize, DataTypes} = require("sequelize");
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWOARD,{
    host: 'localhost',
    dialect:"mysql",
    logging: false
})

sequelize.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch(error=>{
        console.error('Unable to connect to the database:', error);
    })

let db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/User")(sequelize,DataTypes)
db.sequelize.sync({force:false})

module.exports = db;

