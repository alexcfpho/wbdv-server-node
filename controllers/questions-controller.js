const questionsService = require("../services/questions-service");

module.exports = (app) => {

    // /api/quizzes/:qzid/question
    // const createQuestionForQuiz = (req, res) => {
    // }

    // /api/questions
    const findAllQuestions = (req, res) => {
        const questions = questionsService.findAllQuestions();
        res.send(questions)
    }

    // /api/questions/:qid
    const findQuestionById = (req, res) => {
        const qid = req.params['qid'];
        const question = questionsService.findQuestionById(qid);
        res.send(question);
    }

    // /api/quizzes/:qzid/questions
    const findQuestionsForQuiz = (req, res) => {
        const qzid = req.params['qzid'];
        const questions = questionsService.findQuestionsForQuiz(qzid);
        res.send(questions);
    }

    // const createQuestion = (req, res) => {
    //     const question =  questionsService.createQuestion();
    //     question.save()
    //         .then(data => {
    //             res.send(data);
    //         }).catch(err => {
    //         res.status(500).send({
    //             message: err.message || "some error occurred while creating the question."
    //         });
    //     });
    // };

    // const updateQuestion = (req, res) => {
    //     const qid = req.params.qzid;
    //     const updatedQuestion = questionsService.updateQuestion(qid);
    //     res.send(updatedQuestion);
    // }

    // const deleteQuestion = (req, res) => {
    // }

    // Pass ref of server to generate routes and call controller methods.
    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qid", findQuestionById)
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    // app.post("/api/questions/question", createQuestion);
    // app.put("/api/questions/:qid/update", updateQuestion);
    // app.delete("/api/questions/:qid/delete", deleteQuestion);
}