const BaseDatabase = require('./base-database')
const Teacher = require('../models/teacher')

class TeacherDatabase extends BaseDatabase{

   async getRandomQuestionsByType(type){
        const object = await this.findByProperty('whQuestions')
        const randomQuestions = []
        object.whQuestions.forEach(o=>{
            if(o.questions.what == type){
                randomQuestions.push(o)
            }
        })
        const randomIndex = Math.round(Math.random()*(randomQuestions.length-1 - 0))

        return randomQuestions[randomIndex] 
    }
}

module.exports = new TeacherDatabase(Teacher)