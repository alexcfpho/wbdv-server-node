const quizzes = require('./quizzes.json');
const quizzesModel = require('../models/quizzes/quizzes-model.js')
const quizzesDao = require('../daos/quizzes-dao')

const findAllQuizzes = () => {
    // return quizzesModel.find()
    // return quizzes;
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (qzid) => {
    // return quizzes.find((quiz) => {
    //     return quiz._id === qzid;
    // });
    // return quizzesModel.findById(qzid).populate("questions").exec()
    return quizzesDao.findQuizById(qzid)
}

module.exports = {
    findAllQuizzes, findQuizById
}