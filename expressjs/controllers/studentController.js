const User = require('../models/Users')

let students = [
    { id: 1, name: "kadhalar", age: 21, gender: "male" },
    { id: 2, name: "vanis", age: 21, gender: "female" },
    { id: 3, name: "monica", age: 21, gender: "female" },
    { id: 4, name: "deepa", age: 21, gender: "female" },
    { id: 5, name: "cindy", age: 21, gender: "female" }
]

const welcomePage = (req, res) => { // get method is used to get the data from the server....
    res.send("Welcome to the student management system...") //sending the message to the web via server
    
}

const getAllStudents = (req, res) => {
    res.send(students) //sending the data to the web via server in array format
}

const getStudentsById = (req, res) => {
    const id = req.params.id
    const student = students.find((s) => s.id == id)
    if (student){
    res.send(student)
    }
    else{
        res.status(404).send("Student Not Found")
    }

}

const insertStudent = (req, res) => {
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
}

const updateStudent = (req, res) =>{
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
}


const deleteStudent = (req, res) =>{
    const id = parseInt(req.params.id)
    const index = students.findIndex(s => s.id == id)
    if (index !== -1){
        const deleted = students.splice(index, 1)
        res.json(deleted[0])
    }
    else{
        res.status(404).send("Student not found")
    }
}

const addStudentToDB = async (req, res) =>{
    try {
        if (Array.isArray(req.body)) {
            const savedStudents = await User.insertMany(req.body)
            return res.status(201).json(savedStudents)
        }
        const user = new User(req.body)
        const saved = await user.save()
        res.status(201).json(saved)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

const getAllStudentsFromDB = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const getStudentByIdFromDB = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "Student not found" })
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const updateStudentInDB = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updated) {
            return res.status(404).json({ message: "Student not found" })
        }
        res.status(200).json({ message: "Student updated successfully", student: updated })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteStudentFromDB = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id)
        if (!deleted) {
            return res.status(404).json({ message: "Student not found" })
        }
        res.status(200).json({ message: "Student deleted successfully", student: deleted })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    welcomePage,
    getAllStudents,
    getStudentsById,
    insertStudent,
    updateStudent,
    deleteStudent,
    addStudentToDB,
    getAllStudentsFromDB,
    getStudentByIdFromDB,
    updateStudentInDB,
    deleteStudentFromDB
}