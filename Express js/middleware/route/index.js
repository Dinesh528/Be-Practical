const express =  require('express');
const app = express();

const path = require('path');
const router = express.Router();

const upload = require('../middleware/UploadMiddleware');
const Resize = require('../middleware/Resize');

router.get('/', async function(req,res){
    await res.render('index.ejs');
});

router.post('/post',upload.single('image'), async function(req,res){
    const imgPath = path.join(__dirname, '../public/images');
    const fileUpload = new Resize(imgPath);

    if(!req.file){
        res.status(401).json({ error : 'Please Provide an Image'});
    }

    const filename = await fileUpload.save(req.file.buffer);
    return res.status(200).json({ name : filename});
});

module.exports = router;