// TODO: visit https://expressjs.com/
const express = require('express')
const app = express()

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/questions-controller')(app)
require('./controllers/quizzes-controller')(app)

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});