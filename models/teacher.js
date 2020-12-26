const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:2,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    whQuestions:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WhQuestions',
        autopopulate: {maxDepth:1}
    }],
    newsToReview:[]
    
})

TeacherSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Teachers',TeacherSchema)