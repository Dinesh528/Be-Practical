let express = require ('express');
let app = express();

app.set('view engine','jsx');
app.set('views','./views');
app.engine('jsx',require('express-react-views').createEngine());

app.get('/',require('./router').index);

app.get('/about',require('./router').about);

app.listen(4000, ()=>{
    console.log("http://localhost:4000");
});