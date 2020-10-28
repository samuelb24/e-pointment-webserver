require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const compression = require('compression');
const mongoose = require('mongoose');

app.use(compression());
app.use(express.json());
app.use('/assets', express.static('public'));

var publicRouter = require('./app/routes/publicRoutes');
app.use('/', publicRouter);

var privateRouter = require('./app/routes/privateRoutes');
app.use('/', privateRouter);


mongoose.connect(process.env.DB_CONNECTION, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => {
    console.log('Connected to DB');
});

app.listen(port, () => {
    console.log(`App started listening at port ${port}`)
});