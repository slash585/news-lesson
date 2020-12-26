const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Student',
        autopopulate: {maxDepth:1}
    },
    questions:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'WhQuestions',
        autopopulate: {maxDepth:1}
    },
    newsText:String
})

NewsSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('News',NewsSchema)