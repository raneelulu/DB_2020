const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../upload/');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}-${Date.now()}`);
    }
})
const upload = multer({ storage });
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.static('public'));
router.get('/', (req, res) => {
    res.sendFile('public/index.html');
});
router.post('/', function(req, res) {
    console.log(req.file);
});

//upload.single('file')

module.exports = router;