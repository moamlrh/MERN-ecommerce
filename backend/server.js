const express = require('express')
require('dotenv').config()


// my routs
const productsRoute = require('./routers/productsRoute')
const authRoutes = require('./routers/authRoutes')


// mongoose
const MONDB_URI = process.env.MONGODB_URI_TEST //process.env.MONGODB_URI_TEST
const connectTODatabase = require('./config/mongodbConfig')


// app
const app = express()

// middlewares
app.use(express.json())
const errorHandler = require('./config/errors/errorHandler')

// routes
app.use('/auth', authRoutes)
app.use('/products', productsRoute)


// Error handling
app.use(errorHandler)

connectTODatabase(MONDB_URI).then((msg) => {
    app.listen(4000, () => console.log(msg))
})
