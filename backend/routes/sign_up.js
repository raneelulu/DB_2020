const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.get('/', function(req, res, next){
    // 회원 리스트 넘겨주기
    var ret = {
        // task_list
        // 현재 서버 내에 관리자가 생성한 테스크 정보
        member_list: [
            {name: '이의동', des: '코로나도 피해감', upload: 1, table_name: 'table1', table_schema: 'schema1', data_type: 'origin_data_type1'},
            {name: '류동철', des: '악질 중의 악질', upload: 1, table_name: 'table2', table_schema: 'schema2', data_type: 'origin_data_type2'},
            {name: '유현석', des: '술대장', upload: 1, table_name: 'table3', table_schema: 'schema3', data_type: 'origin_data_type3'},
            {name: '박성현', des: '20년 최고 남친상', upload: 1, table_name: 'table4', table_schema: 'schema4', data_type: 'origin_data_type4'},
            {name: '서기원', des: '큰일남', upload: 1, table_name: 'table5', table_schema: 'schema5', data_type: 'origin_data_type5'},
        ]
    };

    res.json(ret)
});

router.post('/create', function (req, res, next) {

    // Task 정보
    var task_info = {
        name: req.params.name,
        descripotion: req.params.des,
        start_period: req.params.start_period,
        end_period: req.params.end_period,
        min_submit_period: req.params.min_submit_period,
        standard_of_pass: req.params.standard_of_pass
    }

    // True이면 SQL 아니면 json파일
    var use_sql = req.params.use_sql;
    var taskSchema = req.params.taskSchema;

    // 저장 성공 여부 전송
    // 성공이면 true, 실패면 false
    res.json({success: true})
});

module.exports = router;