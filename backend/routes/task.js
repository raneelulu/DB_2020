// 이름, 설명, 최소업로드 주기, 데이터 테이블 이름, 데이터 테이블 스키마, 원본 데이터 타입
// 테스크 통계 보여주는 용도

const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.get('/', function(req, res, next){
    var ret = {
        // task_list
        // 현재 서버 내에 관리자가 생성한 테스크 정보
        task_list: [{id: '1', name: '드가볼까', des: '자 드가자', upload: 1, table_name: 'table1', table_schema: 'schema1', data_type: 'origin_data_type'}],
    };

    res.json(ret)
});

module.exports = router;