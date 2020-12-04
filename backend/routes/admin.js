const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {

    var ret = {
        // todo_list
        // 이 평가자에게 배당되었지만 아직 평가하지 않은 파싱 데이터 시퀀스 파일들을 리스트로 받아옴
        // (파일 ID, 파일 타입, 테스크 이름, 회차, 기간) 정보가 필요함
        user_list: [{id: '서기원', task: '트롤', age: 25, sex: 'm', position: '트롤왕'},
                    {id: '박성현', task: '사랑꾼', age: 26, sex: 'm', position: '사랑왕'}]
    };
    console.log(ret);
    res.json(ret)
});

module.exports = router;
