const express  = require('express')
const router = express.Router()

// importing controller functions
const {
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
} = require('../controllers/studentController')

// Welcome Route
router.get('/', welcomePage)

// In-Memory Array Routes
router.get('/students', getAllStudents)
router.get('/students/:id', getStudentsById)
router.post('/students', insertStudent)
router.put('/students/:id', updateStudent)
router.delete('/students/:id', deleteStudent)

// MongoDB Database Routes (/users)
router.get('/users', getAllStudentsFromDB)
router.get('/users/:id', getStudentByIdFromDB)
router.post('/users', addStudentToDB)
router.put('/users/:id', updateStudentInDB)
router.delete('/users/:id', deleteStudentFromDB)

module.exports = router
