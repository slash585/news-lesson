const mongoose = require('mongoose')

const WhQuestionsSchema = new mongoose.Schema({
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Teachers',
        autopopulate: {maxDepth:1}
    },
    questions:[]
})

WhQuestionsSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('WhQuestions',WhQuestionsSchema)