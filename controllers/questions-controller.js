const questionsService = require("../services/questions-service");

module.exports = (app) => {

    // /api/questions
    // const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions();
        // res.send(questions)
    //     questionsService.findAllQuestions()
    //         .then((questions) => {
    //             res.send(questions)
    //         })
    // }

    app.get('/api/questions', (req, res) =>
        questionsService.findAllQuestions()
            .then(questions => res.json(questions)))

    // /api/questions/:qid
    // const findQuestionById = (req, res) => {
    //     const qid = req.params['qid'];
        // const question = questionsService.findQuestionById(qid);
        // res.send(question);
    //     questionsService
    //         .findQuestionById(qid)
    //         .then((question) => {
    //             res.send(question)
    //         })
    // }

    app.get('/api/questions/:qid', (req, res) =>
        questionsService.findQuestionById(req.params['qid'])
            .then(question => res.json(question)))

    // /api/quizzes/:qzid/questions
    // const findQuestionsForQuiz = (req, res) => {
        // const qzid = req.params['qid'];
        // const questions = questionsService.findQuestionsForQuiz(qzid);
        // res.send(questions);
    //     questionsService
    //         .findQuestionsForQuiz(qzid)
    //         .then((questions) => {
    //             res.send(questions)
    //         })
    // }

    app.get('/api/quizzes/:qzid/questions', (req, res) =>
        questionsService.findQuestionsForQuiz(req.params['qzid'])
            .then(questions => res.json(questions)))
}