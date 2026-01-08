const http  = require('http')

const server =  http.createServer((req, res)=>{
    res.end('Hello from Node.js server');
});

server.listen(3000, ()=>{
    console.log("server is running ar http://localhost:3000/");
});