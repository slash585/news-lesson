const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const teachersRouter = require('./routes/teacher')
const studentsRouter = require('./routes/student')


app.set('view engine','pug')
app.use(bodyParser.json())

app.use('/',indexRouter)
app.use('/teachers',teachersRouter)
app.use('/students',studentsRouter)

app.listen(3000,()=>{
    console.log('started listening')
})
