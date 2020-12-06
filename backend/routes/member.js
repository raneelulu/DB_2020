const express = require('express');
const router = express.Router();
const Functions = require('../scripts/Functions')

router.get('/', function(req, res, next){
  // 회원 정보
  /*
    var ret = {
      member_list: [                                            // 참여자 리스트
          {id: '2015147531', name: '서기원', role: 'evaluator', gender: 'm', taskList:['1','2']},
          {id: '2015147533', name: '유현석', role: 'user', gender: 'm', taskList:['6','7']},
          {id: '2015147562', name: '이의동', role: 'user', gender: 'm', taskList:['9','8']},
          {id: '2015147563', name: '류동철', role: 'user', gender: 'm', taskList:['4','3']},
        ]
    };*/
    
    var ret = {};
    Functions.get_members()
    .then((results=>{
      ret.member_list = results;
      res.json(ret);
    }));
});

router.get('/:userID', function(req, res, next){
  var user_id = req.params.userID;
  // 회원 상세 정보
  // 참여자이면 참여 task_info를 받아서 전달, 평가자이면 평가한 file_info를 받아서 전달
  // 참여자이면 file_info에 빈칸 전달
  // 평가자이면 task_info에 빈칸 전달
  // 빈칸 전달하면 알아서 처리됨 ㅇㅇ
  /*
    var ret = {
      user_info: [{id: '2015147531', name: '서기원', role: '제출자', gender: 'm', taskList: ['1','2']}],
      task_info: [
        {name: '생각보다 어려웠다', fileNumber: '10', tupleNumber: '1000', nullProperty: '5'},
        {name: '생각보다 어려웠다1', fileNumber: '10', tupleNumber: '1000', nullProperty: '5'},
        {name: '생각보다 어려웠다2', fileNumber: '10', tupleNumber: '1000', nullProperty: '5'},
        {name: '생각보다 어려웠다3', fileNumber: '10', tupleNumber: '1000', nullProperty: '5'},
        {name: '생각보다 어려웠다4', fileNumber: '10', tupleNumber: '1000', nullProperty: '5'},
      ],
      file_info: [
        {id: '1', score: '10', pnp: 'pass'},
        {id: '2', score: '6', pnp: 'pass'},
        {id: '3', score: '4', pnp: 'non-pass'},
        {id: '4', score: '1', pnp: 'non-pass'},
      ]
    };
    res.json(ret)*/
    var ret = {};
    Functions.check_member_type(user_id)
    .then((results)=>{
      if(results[0].type == 'submitter'){
        

      } else if(results[0].type == 'evaluator'){

      }
    })
});

router.post('/search', function (req, res, next) {

  // 검색어 모음
  var search_info = {
    taskname : req.params.taskName,
    id : req.params.userId,
    gender : req.params.userGender,
    age : req.params.userAge,
    role : req.params.userRole 
  }

  var ret = {
    member_list: [                                            // 참여자 리스트
        {id: '2015147531', name: '서기원', role: 'evaluator', gender: 'm', taskList:['1','2']},
        {id: '2015147533', name: '유현석', role: 'evaluator', gender: 'm', taskList:['6','7']},
        //{id: '2015147562', name: '이의동', role: 'user', gender: 'm', taskList:['9','8']},
        //{id: '2015147563', name: '류동철', role: 'user', gender: 'm', taskList:['4','3']},
      ]
  };

  res.json(ret)
});

module.exports = router;