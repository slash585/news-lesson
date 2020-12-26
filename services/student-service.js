const BaseService = require('./base-service')
const  Student = require('../models/student')
const whQuestionsService = require('./wh-questions-service')
const newsService = require('./news-service')

class StudentService extends BaseService{
    async createNews(questionsId,studentId,newsText){
        const questions = await whQuestionsService.find(questionsId)
        
        const student = await this.find(studentId)

        const news = await newsService.insert({student:student,questions:questions,newsText:newsText})
        student.news.push(news)

        await student.save()

        return news
    }
}

module.exports = new StudentService(Student)