const mongoose = require('mongoose')
const questionsSchema = require('../questions/questions-schema')
const quizAttemptsSchema = mongoose.Schema(
    {
        score: Number,
        quiz: {type: String, ref: 'QuizzesModel'},
        answers: [questionsSchema]
    }, {collection: 'quizAttempts'})

module.exports = quizAttemptsSchema