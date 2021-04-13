const questions = require('./questions.json');

// const createQuestion = () => {}
// const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return questions;
}

const findQuestionById = (quid) => {
    return questions.find((question) => {
        return question._id === quid;
    });
}

const findQuestionsForQuiz = (qzid) => {
    return questions.filter((question) => {
        return question.quizId === qzid;
    })
}

// const updateQuestion = (quid) => {
//     return questions.find((question) => {
//         if (question._id === quid) {
//         }
//     }
// }

// const deleteQuestion = () => {}

module.exports = {
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz
}