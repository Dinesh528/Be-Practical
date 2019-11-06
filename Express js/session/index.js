const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser');
const hbs = require('express-hbs');
const expressValidator = require('express-validator');
const session = require('express-session');

//const user = require('./user.route');

const app = express();
const PORT = 2000;

//app.use('/user',user);

app.use(express.static('public'));
app.engine(
        'hbs',
        hbs.express4({
            partialDir: __dirname + '/views/partials'
        })
    );

app.set('view engine','hbs');
app.set('views',__dirname+'/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({ secret:'Dinesh',resave:false,saveUninitialized:true}));


//app.use(expressValidator());

app.get('/',(req,res)=>{
    res.send('Welcome to session');
});

app.get('/user',(req,res)=>{
    res.render('add.hbs',{errors: req.session.errors});
    req.session.errors = null;
});

app.post('/user/add', function(req,res){
    let name= req.body.name;
    let email = req.body.email;

req.checkBody('name', 'Name is Required').notEmpty();
req.checkBody('eamil', 'Email is Required').notEmpty();
req.checkBody('eamil', 'Please enter a valid email').isEmail();
const errors = req.validationErrors();

if(name=='dinesh' && email=='dinesh@gmail.com'){
    req.session.success = true;
    res.redirect('/');
}else {
    req.session.errors = 'Username and Email id is not valid';
    res.redirect('/user');
}
});

app.listen(PORT, ()=>{
    console.log('Server is running at http://localhost:' + PORT);
});