const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // get method is used to get the data from the server....
    res.send("Hello from the express js....") //sending the message to the web via server
    
})





app.listen(port, () =>{
    console.log(`server is running!!!`)
    console.log(`http://localhost:${port}`)

})