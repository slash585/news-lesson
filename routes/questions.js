const router = require('express').Router()
const {whQuestionsService} = require('../services')
router.get('/', async (req,res)=>{
    const questions = await whQuestionsService.load()
    res.send(questions)
})

router.get('/:questionsId', async (req,res)=>{
    const question = await whQuestionsService.find(req.params.questionsId)
    res.send(question)
})

module.exports = router