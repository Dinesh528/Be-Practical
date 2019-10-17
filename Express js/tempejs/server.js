const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/home',(req,res)=>{
    res.render('home');
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.get('/in',(req,res)=>{
    res.render('in.ejs');
})

app.listen(4000, (err,response)=>{
    console.log("Server is running in http://localhost:4000");
});