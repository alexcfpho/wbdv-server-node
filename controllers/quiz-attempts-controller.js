const quizzesAttemptsDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {

    app.get('/api/quizzes/:qid/attempts', (req, res) =>
        quizzesAttemptsDao.findAttemptsForQuiz(req.params['qid'])
            .then(attempts => res.send(attempts)))

    app.post('/api/quizzes/:qid/attempts', (req, res) =>
        quizzesAttemptsDao.createAttempt(req.params['qid'], req.body)
            .then(attempt => res.send(attempt)))
}