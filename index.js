// import express from 'express';
var express = require('express');
var cors = require('cors');
// const serverless = require("serverless-http");
var app = express();
var PORT = 3333;
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var router = express.Router();
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })
router.get('/', function (req, res) {
    // res.sendFile('index.html', { root: __dirname })
    var users = [
        { name: 'Adi' },
        { name: 'Shir' },
        { name: 'Guy' }
    ];
    res.send(users);
});
router.get('/users', function (req, res) {
    // res.sendFile('index.html', { root: __dirname })
    var users = [
        { name: 'Adi' },
        { name: 'Shir' },
        { name: 'Guy' }
    ];
    res.send(users);
});
app.use('/', router);
app.listen(PORT, function () {
    console.log('Server is listening on port ' + PORT);
});
module.exports = router;
// app.use(`/.netlify/functions/api`, router);
// module.exports.handler = serverless(app);
//# sourceMappingURL=index.js.map