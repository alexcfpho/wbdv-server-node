const questions = require('./questions.json');
const questionsModel = require('../models/questions/questions-model')
const questionsDao = require('../daos/questions-dao')

const findAllQuestions = () => {
    // return questions;
    // return questionsModel.find();
    return questionsDao.findAllQuestions();

}

const findQuestionById = (quid) => {
    // return questions.find((question) => {
    //     return question._id === quid;
    // });
    // return questionsModel.find({_id: quid})
    return questionsDao.findQuestionById(quid)
}

const findQuestionsForQuiz = (qzid) => {
    // return questions.filter((question) => {
    //     return question.quizId === qzid;
    // })
    // return questionsModel.find({quizId: qzid})
    return questionsDao.findQuestionsForQuiz(qzid)
}

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }