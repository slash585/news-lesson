const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('./mongo-connection')

const indexRouter = require('./routes/index')
const teachersRouter = require('./routes/teacher')
const studentsRouter = require('./routes/student')
const questionsRouter = require('./routes/questions')
const newsRouter = require('./routes/news')




app.set('view engine','pug')
app.use(bodyParser.json())
app.use(cors())

app.use('/',indexRouter)
app.use('/teachers',teachersRouter)
app.use('/students',studentsRouter)
app.use('/questions',questionsRouter)
app.use('/news',newsRouter)


app.listen(3000,()=>{
    console.log('started listening')
})
