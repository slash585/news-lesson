const router = require('express').Router()

router.get('/', (req,res)=>{
    res.render('students')
})

module.exports = router