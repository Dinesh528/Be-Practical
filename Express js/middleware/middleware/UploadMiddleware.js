const multer = require('multer');

const upload = multer ({
    limits: {
        // file size = 10mb
        fileSize: 10 * 1024 * 1024
    }
});

module.exports = upload;