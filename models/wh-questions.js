const uuid = require('uuid')

class WhQuestions{
    constructor(id=uuid.v4(),teacherId,teacherName,questions=[]){
        this.id = id
        this.teacherId = teacherId
        this.teacherName = teacherName
        this.questions = questions
    }
}

module.exports = WhQuestions