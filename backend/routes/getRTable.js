const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.post('/', function(req, res, next){
    // Task 정보
    var id = req.body.userID;
        // rTask : 제출자가 신청할 수 있는 테스크 정보
        // wTask : 신청 대기 중에 있는 테스크 정보 
    var ret = {
        rTask: [
            { name: 'task2', period: 4, description: 'data of food' },
            { name: 'task4', period: 1, description: 'data of money' }
        ],
        wTask: [
            { name: 'task1', period: 2, description: 'data of school' },
            { name: 'task3', period: 1, description: 'data of habit' }
        ]
    };
    res.json(ret)
});

module.exports = router;