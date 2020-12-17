const uuid = require('uuid')
const WhQuestions = require('./wh-questions')

class Teacher{
    constructor(id=uuid.v4(),name,email,password,whQuestions=[],newsToReview=[]){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.whQuestions = whQuestions
        this.newsToReview = newsToReview
    }

    createQuestions({who,where,when,why,what,how}){
        const questions = new WhQuestions(undefined,this.id,this.name,{who,where,when,why,what,how})
        this.whQuestions.push(questions)

        return questions
    }

    viewNews(news,grade,comment){ 
        this.newsToReview.push({news,grade,comment})
        return this.newsToReview
    }

    static create({id,name,email,password,whQuestions,newsToReview}){
        return new Teacher(id,name,email,password,whQuestions,newsToReview)
    }
}

module.exports = Teacher