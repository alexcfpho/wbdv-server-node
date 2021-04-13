const quizzesService = require('../services/quizzes-service.js');

module.exports = (app) => {

    // /api/quizzes
    const findAllQuizzes = (req, res) => {
        res.send(quizzesService.findAllQuizzes())
    }

    // /api/quizzes/:qzid
    const findQuizById = (req, res) => {
        const qzid = req.params['qzid'];
        res.send(quizzesService.findQuizById(qzid))
    }

    app.get('/api/quizzes', findAllQuizzes);
    app.get('/api/quizzes/:qzid', findQuizById);
}