const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.get('/', function(req, res, next){
    // 이름, 설명, 최소업로드 주기, 데이터 테이블 이름, 데이터 테이블 스키마, 원본 데이터 타입
    // 테스크 통계 보여주는 용도
    var ret = {
        // task_list
        // 현재 서버 내에 관리자가 생성한 테스크 정보
        task_list: [
            {name: '이의동', des: '코로나도 피해감', upload: 1, table_name: 'table1', table_schema: 'schema1', data_type: 'origin_data_type1'},
            {name: '류동철', des: '악질 중의 악질', upload: 1, table_name: 'table2', table_schema: 'schema2', data_type: 'origin_data_type2'},
            {name: '유현석', des: '술대장', upload: 1, table_name: 'table3', table_schema: 'schema3', data_type: 'origin_data_type3'},
            {name: '박성현', des: '20년 최고 남친상', upload: 1, table_name: 'table4', table_schema: 'schema4', data_type: 'origin_data_type4'},
            {name: '서기원', des: '큰일남', upload: 1, table_name: 'table5', table_schema: 'schema5', data_type: 'origin_data_type5'},
        ]
    };

    res.json(ret)
});

router.get('/:taskName', function(req, res, next){
    var name = req.params.taskName;
    
    var ret = {
        task: {
            name: '이의동ㅋ',                                    // 테스크 이름
            des: '개쩌는 미친놈',                                // 테스크에 대한 간략한 설명
            all_file_number: '10',                              // 제출된 전체 파일 수
            pass_tuple_number: '33333',                         // pass된 데이터 튜플 수
            data_type_level_tuple_number: '9999'                // 원본 데이터 타입 수준의 튜플 수
        },
        user_list: [                                            // 참여자 리스트
            {id: '2015147531', name: '서기원'},
            {id: '2015147533', name: '유현석'},
            {id: '2015147562', name: '이의동'},
            {id: '2015147563', name: '류동철'},
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