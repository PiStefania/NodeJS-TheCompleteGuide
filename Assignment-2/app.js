const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Just run forever!');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('In users middleware');
    res.send('<h1>The "Users" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In root middleware');
    res.send('<h1>Hello from express in root!</h1>');
});

app.listen(3000);