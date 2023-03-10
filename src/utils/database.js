const {Sequelize}=require('sequelize')

const db= new Sequelize({
    database:'postgres',
    host:'localhost',
    dialect:'postgres',
    port:5433,
    username:'postgres',
    password:'ruut'
})
module.exports=db