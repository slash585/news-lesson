const router = require('express').Router()
const {whQuestionsService} = require('../services')
router.get('/', async (req,res)=>{
    const questions = await whQuestionsService.load()
    res.render('questions', {questions})
})

router.get('/:questionsId', async (req,res)=>{
    const question = await whQuestionsService.find(req.params.questionsId)
    res.render('question', {question})
})

module.exports = router