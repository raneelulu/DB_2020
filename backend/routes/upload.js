const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './upload/');    // 업로드 위치
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`);
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
router.post('/', upload.single('file'), function(req, res) {
    console.log(req.file);
    console.log(req.body.subNum);
    console.log(req.body.period);
    console.log(req.body.taskName);
    console.log(req.body.dataType);
});

module.exports = router;