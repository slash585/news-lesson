const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    news:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News',
        autopopulate: {maxDepth:1}
    }]
})

StudentSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Student',StudentSchema)