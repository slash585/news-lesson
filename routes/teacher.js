const {studentService,teacherService} = require('../services')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req,res)=>{
    const teachers = await teacherDatabase.load()
    res.render('teachers',{teachers})
})

router.get('/:teacherId',async (req,res)=>{
    const teacher = await teacherService.find(req.params.teacherId)
    if(!teacher) return res.status(404).send("cannot find teacher")
    res.render('teacher',{teacher})
})

router.post('/',async (req,res)=>{
    const teacher = await teacherService.insert(req.body)
    res.send(teacher)
})

router.delete('/:teacherId', async (req,res)=>{
    await teacherService.removeBy('id',req.params.teacherId)
    res.send('ok')
})

router.post('/:teacherId/createQuestions',async (req,res)=>{
    const {teacherId} = req.params
    const {who,where,when,why,what,how} = req.body

    const teacher = await teacherService.find(teacherId)
    teacher.createQuestions({who,where,when,why,what,how})

    await teacherService.update(teacher)

    res.send('OK')
})

router.post('/:teacherId/viewNews', async (req,res)=>{
    const {teacherId} = req.params
    const {studentId,newsId,grade,comment} = req.body

    const teacher = await teacherService.find(teacherId)
    const news = await studentService.getByNews(studentId,newsId)
    
    teacher.viewNews(news,grade,comment)
    await teacherService.update(teacher)

    res.send(news)
})

module.exports = router