const express = require('express');
const mongoose = require('mongoose');

const routes = require('./Routes/index');

const host = '127.0.0.1';
const port = 3000;

const app = express();

app.use('/', routes);

mongoose.connect('mongodb://127.0.0.1:27017/piyush',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, host, () => {
            console.log(`Server running at http://${host}:${port}/`);
        });
    })
    .catch(err => console.log(err))

