const express = require('express');
var cors = require('cors');
const serverless = require("serverless-http");
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3333;
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const router = express.Router();
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/', (req, res) => {
    // res.sendFile('index.html', { root: __dirname })
    // const users = [
    //     { name: 'Adi' },
    //     { name: 'Shir' },
    //     { name: 'Guy' }
    // ]
    // res.send(users)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Express.js!</h1>');
    res.end();
})

router.get('/users', (req, res) => {
    // res.sendFile('index.html', { root: __dirname })
    const users = [
        { name: 'Adi' },
        { name: 'Shir' },
        { name: 'Guy' }
    ]
    res.send(users)
})


app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

// app.listen(PORT, () => {
//     console.log('Server is listening on port ' + PORT);

// })

module.exports = express;
module.exports.handler = serverless(app);

// app.use(`/.netlify/functions/api`, router);
// module.exports.handler = serverless(app);

