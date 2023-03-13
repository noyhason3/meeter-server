// import express from 'express';
const express = require('express');
var cors = require('cors');


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


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.get('/users', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
    // const users = [
    //     { name: 'Adi' },
    //     { name: 'Shir' },
    //     { name: 'Guy' }
    // ]
    // res.send(users)
})

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);

})