const {studentService,teacherService} = require('../services')

const router = require('express').Router()

router.get('/', async (req,res)=>{
    const teachers = await teacherService.load()
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

    const questions = await teacherService.createQuestions(teacherId,who,where,when,why,what,how)

    await teacherService.update()

    res.send(questions)
})

router.post('/:teacherId/viewNews', async (req,res)=>{
    const {teacherId} = req.params
    const {newsId,grade,comment} = req.body

    const viewNews = await teacherService.viewNews(newsId,teacherId,grade,comment)

    await teacherService.update()

    res.send(viewNews)

})

router.patch('/:teacherId', async (req,res)=>{
    const {name} = req.body
    await teacherService.update(req.params.teacherId,{name})
    res.send('ok')
})

module.exports = router