const BaseDatabase = require('./base-database')
const Student = require('../models/student')

class StudentDatabase extends BaseDatabase{
    async getByQuestions(studentId,newsId){
        const student = await this.find(studentId)
        const choosedQuestions = []
        student.fetchedQuestions.forEach(fq=>{
            if(fq.id == newsId){
               choosedNews.push(fq) 
            }
        })
        return choosedQuestions
    }

    async getByNews(studentId,newsId){
        const student = await this.find(studentId)
        const choosedNews = []
        student.news.forEach(n=>{
            if(n.id == newsId){
                choosedNews.push(n)
            }
        })
        return choosedNews
    }
}

module.exports = new StudentDatabase(Student)