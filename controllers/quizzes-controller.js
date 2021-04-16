const quizzesService = require('../services/quizzes-service.js');

module.exports = (app) => {

    // /api/quizzes
    // const findAllQuizzes = (req, res) => {
        // res.send(quizzesService.findAllQuizzes())
        // quizzesService.findAllQuizzes()
        //     .then((quizzes) => {
        //       res.send(quizzes)
        //     })
    // }

    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(quizzes => res.json(quizzes)))

    // /api/quizzes/:qzid
    // const findQuizById = (req, res) => {
        // const qzid = req.params['qid'];
        // res.send(quizzesService.findQuizById(qzid))
        // quizzesService.findQuizById(req.params['qid'])
        //     .then((quiz) => {
        //         res.send(quiz)
        //     })
    // }

    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))

    // app.get('/api/quizzes', findAllQuizzes);
    // app.get('/api/quizzes/:qid', findQuizById);
}