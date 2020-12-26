const {studentService,teacherService} = require('../services/index')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async(req,res)=>{
    const students = await studentService.load()
    res.render('students', {students})
    
})

router.get('/:studentId',async (req,res)=>{
    const student = await studentService.find(req.params.studentId)
    if(!student) return res.status(404).send('cannot find student')
    res.render('student', {student} )
})

router.post('/',async (req,res)=>{
    const student = await studentService.insert(req.body)
    res.send(student)
})

router.delete('/:studentId',async (req,res)=>{
    await studentService.removeBy('id',req.params.studentId)
    res.send('ok')
})

router.post('/:studentId/findQuestions',async (req,res)=>{
    const {studentId} = req.params
    const {questionsType} = req.body

    const student = await studentService.find(studentId)
    const questions = await teacherService.getRandomQuestionsByType(questionsType)

    const fetchedQuestions = student.saveFetchedQuestions(questions)

    await studentService.update(student)
    res.send(flatted.stringify(fetchedQuestions))
})

router.post('/:studentId/createNews',async (req,res)=>{
    const {studentId} = req.params
    const {questionsId,newsText} = req.body

    const student = await studentService.find(studentId)
    const choosedQuestions = await studentService.getByQuestions(studentId,questionsId)

    const news = student.createNews(choosedQuestions,newsText)

    await studentService.update(student)

    res.send(news)
})

module.exports = router