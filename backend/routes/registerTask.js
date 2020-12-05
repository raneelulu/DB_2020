const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.post('/', function(req, res, next){
    // 신청한 task 이름
    // 제출자 id

    console.log(req.body.userID);
    console.log(req.body.taskName);
});

module.exports = router;