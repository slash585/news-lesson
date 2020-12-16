const uuid = require('uuid')

class News{
    constructor(id=uuid.v4(),studentId,studentName,questions,newsText){
        this.id = id
        this.studentId = studentId
        this.studentName = studentName
        this.questions = questions
        this.newsText = newsText
    }
}

module.exports = News