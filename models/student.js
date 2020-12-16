const News = require('./news')
const uuid = require('uuid')

class Student{
    constructor(id=uuid.v4(),name,email,password,news=[],fetchedQuestions=[]){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.news = news
        this.fetchedQuestions = fetchedQuestions
    }

    createNews(questions,newsText){
        const news = new News(undefined,this.id,this.name,questions,newsText)
        this.news.push(news)

        return news
    }

    saveFetchedQuestions(whQuestions){
        const questions = whQuestions
        this.fetchedQuestions.push(questions)

        return questions
    }

    static create({id,name,email,password,news,fetchedQuestions}){
        return new Student(id,name,email,password,news,fetchedQuestions)
    }
}

module.exports = Student