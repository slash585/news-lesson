const {studentDatabase,teacherDatabase} = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req,res)=>{
    const teachers = await teacherDatabase.load()
    res.render('teachers',{teachers})
})

router.get('/:teacherId',async (req,res)=>{
    const teacher = await teacherDatabase.find(req.params.teacherId)
    if(!teacher) return res.status(404).send("cannot find teacher")
    res.render('teacher',{teacher})
})

router.post('/',async (req,res)=>{
    const teacher = await teacherDatabase.insert(req.body)
    res.send(teacher)
})

router.delete('/:teacherId', async (req,res)=>{
    await teacherDatabase.removeBy('id',req.params.teacherId)
    res.send('ok')
})

router.post('/:teacherId/createQuestions',async (req,res)=>{
    const {teacherId} = req.params
    const {who,where,when,why,what,how} = req.body

    const teacher = await teacherDatabase.find(teacherId)
    teacher.createQuestions({who,where,when,why,what,how})

    await teacherDatabase.update(teacher)

    res.send('OK')
})

router.post('/:teacherId/viewNews', async (req,res)=>{
    const {teacherId} = req.params
    const {studentId,newsId,grade,comment} = req.body

    const teacher = await teacherDatabase.find(teacherId)
    const news = await studentDatabase.getByNews(studentId,newsId)
    
    teacher.viewNews(news,grade,comment)
    await teacherDatabase.update(teacher)

    res.send(news)
})

module.exports = router