const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect(
    'mongodb://localhost:27017/whiteboard-02',
    {useNewUrlParser: true, useUnifiedTopology: true}
)

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./controllers/questions-controller')(app)
require('./controllers/quizzes-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 4000");
});