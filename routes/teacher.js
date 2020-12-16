const router = require('express').Router()

router.get('/', (req,res)=>{
    res.render('teachers')
})

module.exports = router