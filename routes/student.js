const {studentDatabase,teacherDatabase} = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async(req,res)=>{
    const students = await studentDatabase.load()
    res.render('students', {students})
    
})

router.get('/:studentId',async (req,res)=>{
    const student = await studentDatabase.find(req.params.studentId)
    if(!student) return res.status(404).send('cannot find student')
    res.render('student', {student} )
})

router.post('/',async (req,res)=>{
    const student = await studentDatabase.insert(req.body)
    res.send(student)
})

router.delete('/:studentId',async (req,res)=>{
    await studentDatabase.removeBy('id',req.params.studentId)
    res.send('ok')
})

router.post('/:studentId/findQuestions',async (req,res)=>{
    const {studentId} = req.params
    const {questionsType} = req.body

    const student = await studentDatabase.find(studentId)
    const questions = await teacherDatabase.getRandomQuestionsByType(questionsType)

    const fetchedQuestions = student.saveFetchedQuestions(questions)

    await studentDatabase.update(student)
    res.send(flatted.stringify(fetchedQuestions))
})

router.post('/:studentId/createNews',async (req,res)=>{
    const {studentId} = req.params
    const {questionsId,newsText} = req.body

    const student = await studentDatabase.find(studentId)
    const choosedQuestions = await studentDatabase.getByQuestions(studentId,questionsId)

    const news = student.createNews(choosedQuestions,newsText)

    await studentDatabase.update(student)

    res.send(news)
})

module.exports = router