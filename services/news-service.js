const BaseService = require('./base-service')
const  News = require('../models/news')



class NewsService extends BaseService{

}

module.exports = new NewsService(News)