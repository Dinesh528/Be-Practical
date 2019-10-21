const users = [
    {
        id:121,
        name: 'Ramesh Kumar',
        email: 'ramesh@gmail.com',
        mobile: '944966666'
    },
    {
        id:122,
        name: 'dinesh',
        email: 'dinesh@gmail.com',
        mobile:'78888888'
    }
];

exports.index = function(req,res){
    res.render('index',{persons:users});
};

exports.about = function(req,res){
    res.render('about');
};