const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.post('/', function(req, res, next){
    // 이름, 설명, 최소업로드 주기, 데이터 테이블 이름, 데이터 테이블 스키마, 원본 데이터 타입
    // 자신의 테스크 목록 불러오기

    var id = req.body.userID;
    var ret = {
        // 제출자 id에 해당하는 테스크 정보
        items: [
            { name: 'task1', period: 2, description: 'data of school' },
            { name: 'task2', period: 4, description: 'data of food' },
            { name: 'task3', period: 1, description: 'data of habit' },
            { name: 'task4', period: 1, description: 'data of money' }
        ],
        score: 85
    };

    res.json(ret)
});

router.post('/:taskName', function(req, res, next){
    var name = req.params.taskName;
    
    var ret = {
        type: [
            {typeName: 'type1-1'},
            {typeName: 'type1-2'}
        ],
    };
    res.json(ret)
});

router.post('/:taskName/:typeName', function(req, res, next){
    // 원본 데이터 타입에 따른 제출한 파일 목록, 회차, pass 여부
    // submitFiles 의 데이터는 subNum(회차) 순으로 정렬
    // 테스크에 체출한 총 파일 수, pass한 총 튜플 수(모든 원본 데이터 타입에 제출된 총 수)
    var name = req.params.typeName;
    
    var ret = {
        submitFiles: [
                {filename: 'file1', subNum: '3', isPass: true},
                {filename: 'file2', subNum: '5', isPass: false},
        ],
        subFileNum: 4,
        tupleNum: 56
    };
    res.json(ret)
});

module.exports = router;