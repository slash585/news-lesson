const BaseService = require('./base-service')
const Teacher = require('../models/teacher')
const whQuestionsService = require('./wh-questions-service')
const newsService = require('./news-service')

class TeacherService  extends BaseService{
    async createQuestions(teacherId,who,where,when,why,what,how){
        const teacher = await this.find(teacherId)

        const questions = await whQuestionsService.insert({teacher:teacher,questions:{who,where,when,why,what,how}})

        teacher.whQuestions.push(questions)

        await teacher.save()

        return questions
    }

    async viewNews(newsId,teacherId,grade,comment){
        const news = await newsService.find(newsId)
        const teacher = await this.find(teacherId)
        const newsToReview = {news,grade:grade,comment:comment}

        teacher.newsToReview.push(newsToReview)

        await teacher.save()

        return newsToReview        
    }
}

module.exports = new TeacherService(Teacher)