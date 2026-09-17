const express = require('express')
const app = express()
const port = 3000
const studentRoutes = require('./routes/studentRoutes')
const connectDb = require('./config/db')
const detenv = require('dotenv').config()

app.use(express.json())
app.use("/api", studentRoutes)

connectDb()
app.listen(port, () =>{
    console.log(`server is running!!!`)
    console.log(`http://localhost:${port}`)

})