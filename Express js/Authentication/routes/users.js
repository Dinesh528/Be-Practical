const controller = require('../controllers/users');

module.exports = router=>{
    //signup route
    router.route('/users').post(controller.add);
    //login route
    router.route('/login').post(controller.login);
};