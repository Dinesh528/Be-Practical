const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./route/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.set('view engine','ejs');

app.use('/upload',router);

app.listen(port,function(){
    console.log(`Server is running on PORT http://localhost:${port}/upload`);
});
