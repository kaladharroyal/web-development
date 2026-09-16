const express = require('express')
const app = express()
const port = 3000

const students = [{
    "id":1,
    "name":"kadhalar",
    "age":21,
    "gender":"male"
},{
    "id":2,
    "name":"vanis",
    "age":21,
    "gender":"female"
},{
    "id":3,
    "name":"monica",
    "age":21,
    "gender":"female"
},{
    "id":4,
    "name":"deepa",
    "age":21,
    "gender":"female"
},{
    "id":5,
    "name":"cindy",
    "age":21,
    "gender":"female"
}]

app.use(express.json())

app.get('/', (req, res) => { // get method is used to get the data from the server....
    res.send("Welcome to the student management system...") //sending the message to the web via server
    
})

app.get('/students', (req, res) => {
    res.send(students) //sending the data to the web via server in array format
})
app.get('/students/:id', (req, res) => {
    const id = req.params.id
    const student = students.find((s) => s.id == id)
    if (student){
    res.send(student)
    }
    else{
        res.status(404).send("Student Not Found")
    }

})

app.post("/students", (req, res) => {
    // 1. Check if body exists
    if (!req.body || !req.body.name || !req.body.age) {
        return res.status(400).send({ message: "Name and age are required" })
    }
    const { name, age, gender } = req.body
    // 2. Create a single new student object
    const newStudent = {
        id: students.length + 1,
        name: name,
        age: age,
        gender: gender || "not specified"
    }
    // 3. Push to the global students array
    students.push(newStudent)
    // 4. Return created status (201) with the newly created student or whole list
    res.status(201).send(newStudent)
})


app.put("/students/:id", (req, res) =>{
    const {name, age, gender} = req.body
    const id = parseInt(req.params.id)

    const student = students.find((s) => s.id == id)

    if(student) {
        student.name = name || student.name
        student.age = age || student.age
        student.gender = gender ||student.gender

        res.send({message: "student updates successfully", student })

    }
    else{

        return res.status(400).send({ message: "Name and age are required" })

    }
})

app.delete("/students/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    const index = students.findIndex(s => s.id == id)
    if (index !== -1){
        const deleted = students.splice(index, 1)
        res.json(deleted[0])
    }
    else{
        res.status(404).send("Student not found")
    }
})


app.listen(port, () =>{
    console.log(`server is running!!!`)
    console.log(`http://localhost:${port}`)

})