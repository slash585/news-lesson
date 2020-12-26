const BaseService = require('./base-service')
const WhQuestions = require('../models/wh-questions')

class WhQuestionsService extends BaseService{

}

module.exports = new WhQuestionsService(WhQuestions)