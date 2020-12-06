const express = require("express");
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.mgtz8.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('mongodb is connected')
})

const articlesRoutes = require('./api/routes/articles')
const categoriesRoutes = require('./api/routes/categories')
const usersRouter = require('./api/routes/users')
//shows where did the client has accesse
app.use(morgan("dev")) 

//use is a method that allows handling Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST, PATCH")
        res.status(200).json({})
    }
    next()
})

//Routes
app.use('/articles', articlesRoutes)
app.use('/categories', categoriesRoutes)
app.use('/users', usersRouter)

app.use((req, res, next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }})
})

module.exports = app