// 이름, 설명, 최소업로드 주기, 데이터 테이블 이름, 데이터 테이블 스키마, 원본 데이터 타입
// 테스크 통계 보여주는 용도

const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.get('/', function(req, res, next){
    var ret = {
        // task_list
        // 현재 서버 내에 관리자가 생성한 테스크 정보
        task_list: [
            {id: '1', name: '이의동', des: '코로나도 피해감', upload: 1, table_name: 'table1', table_schema: 'schema1', data_type: 'origin_data_type1'},
            {id: '2', name: '류동철', des: '악질 중의 악질', upload: 1, table_name: 'table2', table_schema: 'schema2', data_type: 'origin_data_type2'},
            {id: '3', name: '유현석', des: '술대장', upload: 1, table_name: 'table3', table_schema: 'schema3', data_type: 'origin_data_type3'},
            {id: '4', name: '박성현', des: '20년 최고 남친상', upload: 1, table_name: 'table4', table_schema: 'schema4', data_type: 'origin_data_type4'},
            {id: '5', name: '서기원', des: '큰일남', upload: 1, table_name: 'table5', table_schema: 'schema5', data_type: 'origin_data_type5'},
        ]
    };

    res.json(ret)
});

router.post('/create', function (req, res, next) {
    // 스키마랑 원본 데이터 타입은 어떤 식으로 저장되는지 몰라서 일단 string으로 받았어
    // 형태 정해지면 다시 바꾸면 될 듯
    // 자동으로 task_Id가 생성되어야 하는데 어케 하지????
    
    // string 타입
    var taskName = req.params.name;
    var taskdes = req.params.des;
    var taskUpload = req.params.upload;
    var tableName = req.params.table_name;
    var tableSchema = req.params.table_schema;
    var datatpye = req.params.data_type;

    // 저장 성공 여부 전송
    // 성공이면 true, 실패면 false
    res.json({success: true})
})

module.exports = router;