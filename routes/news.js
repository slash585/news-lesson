const router = require('express').Router()
const newsService = require('../services/news-service')

router.get('/', async(req,res)=>{
    const news = await newsService.load()
    res.render('news', {news})
})

router.get('/:newsId', async(req,res)=>{
    const newsText = await newsService.find(req.params.newsId)
    res.render('theNews', {newsText})
})

module.exports = router