const {studentService,teacherService} = require('../services/index')
const flatted = require('flatted')
const student = require('../models/student')

const router = require('express').Router()

router.get('/', async(req,res)=>{
    const students = await studentService.load()
    res.send(students)
    
})

router.get('/:studentId',async (req,res)=>{
    const student = await studentService.find(req.params.studentId)
    if(!student) return res.status(404).send('cannot find student')
    res.send(student)
})

router.post('/',async (req,res)=>{
    const student = await studentService.insert(req.body)
    res.send(student)
})

router.delete('/:studentId',async (req,res)=>{
    await studentService.removeBy('id',req.params.studentId)
    res.send('ok')
})



router.post('/:studentId/createNews',async (req,res)=>{
    const {studentId} = req.params
    const {questionsId,newsText} = req.body

    const news = studentService.createNews(questionsId,studentId,newsText)

    await studentService.update()

    res.send('ok')
})

router.patch('/:studentId', async (req,res)=>{
    const {name} = req.body
    await studentService.update(req.params.studentId,{name})
    res.send('ok')
})

module.exports = router