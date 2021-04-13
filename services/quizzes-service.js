const quizzes = require('./quizzes.json');

// const createQuiz = () => {}

const findAllQuizzes = () => {
    return quizzes;
}

const findQuizById = (qzid) => {
    return quizzes.find((quiz) => {
        return quiz._id === qzid;
    });
}

// const updateQuiz = () => {}
// const deleteQuiz = () => {}

module.exports = {
    findAllQuizzes, findQuizById
}