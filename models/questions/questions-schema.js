const mongoose = require('mongoose')
const questionsSchema = mongoose.Schema(
{
    _id: String,
    title: String,
    quizId: String,
    question: String,
    correct: String,
    answer: String,
    type: {type: String, enumerable: ["TRUE_FALSE", "MULTIPLE_CHOICE", "FILL_BLANKS"]},
    choices: [String]
}, {collection: "questions"})

module.exports = questionsSchema