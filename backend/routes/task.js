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
        ],
        task_schema: [                                         // 원본 데이터 타입과 매핑할 테스크 데이터 테이블 스키마 정보
            {value: '학번', text: '학번'},                      // option을 저렇게 넣어줘야 창이 제대로 뜸
            {value: '이름', text: '이름'},
            {value: '성별', text: '성별'},
            {value: '성적', text: '성적'},
            {value: '연애횟수', text: '연애횟수'},
        ],
        tableSchema: [                                           // 테스크 테이블 스키마 정보
            {a:'학번'},
            {a:'이름'},
            {a:'성별'},
            {a:'성적'},
            {a:'연애횟수'}
        ],
        originData_type: [                                  // 원본 데이터 타입
            [{id: 1}, {a:'이름'}, {a:'학교'}, {a:'나이'}, {a:'생일'}, {a:'성적'}],
            [{id: 2}, {a:'이름'}, {a:'학번'}, {a:'학교'}, {a:'주소'}, {a:'이성친구 유무'}],
            [{id: 3}, {a:'이름'}, {a:'월급'}, {a:'성적'}, {a:'생일'}, {a:'주소'}]
        ]
    };
    res.json(ret)
});

router.get('/:taskName/manage', function(req, res, next){
    var name = req.params.taskName;
    // 테스크 참가 신청 인원
    var ret = {
        task_standard: '7',
        register_list: [
            {id: '2015147531', name: '서기원', score: '7'},
            {id: '2015147533', name: '유현석', score: '6'},
            {id: '2015147562', name: '이의동', score: '9'},
            {id: '2015147563', name: '류동철', score: '4'},
        ]
    };
    res.json(ret)
});

router.post('/:taskName/Register/:userID', function (req, res, next) {
    var name = req.params.taskName;
    var id = req.params.userID;

    // 참가 신청 승인
    var approval = req.params.approval;

    // 저장 성공 여부 전송
    // 성공이면 true, 실패면 false
    res.json({success: true})
});

router.post('/:taskName/resetStandard', function (req, res, next) {
    var name = req.params.taskName;

    // 테스크 제출 파일 PASS 기준 재설정
    var pass_standard = req.params.standard;

    // 저장 성공 여부 전송
    // 성공이면 true, 실패면 false
    res.json({success: true})
});

router.post('/:taskName/addType', function (req, res, next) {
    var name = req.params.taskName;

    // 원본 데이터 타입 추가
    var field_info = req.params.field_info;                 // [{속성 nanme, 속성 변수 type, 매핑할 schema 이름}, ]

    // 저장 성공 여부 전송
    // 성공이면 true, 실패면 false
    res.json({success: true})
});

router.post('/create', function (req, res, next) {

    // Task 정보
    // 혹시 입력한 테스크 이름이 중복되는지 안되는지 체크 가능?
    // 중복되면 success: false만 리턴해주면 알아서 경고창 뜨게 설정은 해놨음
    var task_info = {
        name: req.params.name,
        descripotion: req.params.des,
        start_period: req.params.start_period,
        end_period: req.params.end_period,
        min_submit_period: req.params.min_submit_period,
        standard_of_pass: req.params.standard_of_pass
    }

    // True이면 SQL
    var use_sql = req.params.use_sql;
    var taskSchema = req.params.taskSchema;                 // sql "string 데이터"
    var field_info = req.params.field_info;                 // [{속성 nanme, 속성 변수 type}, ]
    var mapping_info = req.params.map_info;                 // [{속성 nanme, 속성 변수 type, 매핑할 schema 이름}, ]

    // 저장 성공 여부 전송
    // 성공이면 true, 실패면 false
    res.json({success: true})
});

module.exports = router;