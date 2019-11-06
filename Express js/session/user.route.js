const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
    res.render('add.hbs',{error: req.session.errors});
    req.session.errors = null;
});

module.exports= router;