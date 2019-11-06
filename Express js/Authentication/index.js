require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const routes = require('./routes/index');

const envirnoment = process.env.NODE_ENV;
const stage = require('./config')[envirnoment];

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

if(envirnoment !=='production'){
    app.use(logger('dev'));
}

app.use('api/v1',routes(router));


app.listen(`${stage.port}`,()=>{
    console.log(`Server is listening on localhost:${stage.port}`);
})

module.exports= app;