const express = require('express');
const hbs = require('express-hbs');
const bodyParser = require('body-parser');
const path = require('path');
const routePath = require('./router/index.route');

const app = express();
const PORT = 3000;

app.engine(
    'hbs',
    hbs.express4({
        partialsDir: __dirname + '/views'
    })
);

app.set('view engine','hbs');
app.set('views',__dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/',routePath);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
});