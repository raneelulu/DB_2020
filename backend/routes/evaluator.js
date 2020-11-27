const express = require('express');
const router = express.Router();

// const Functions = require('../scripts/Functions');
const DBConn = require('../scripts/DBConnection.js');
const stats = require('../scripts/Stats.js');

const tasks = require('../data/tasks.json');
const files = require('../data/files.json');

router.get('/:userID', function (req, res, next) {
    var id = req.params.userID;

    var query = `
        SELECT ID, NUMBER, START_PERIOD, END_PERIOD, file.TYPE, TASK_NAME
        FROM parsing_data_sequence_file parse, file
        WHERE parse.FILE_ID = file.ID AND parse.P_NP IS NULL AND parse.EVALUATOR_ID = 
    ` + id + ';';

    var results = DBConn.MakeQuery(query);
    if(results == -1) return stats.ERROR_DB_CONNECTION_FAIL;
    if(results[0] == null) return stats.ERROR_NO_ID;

    var ret = {
        todo_list: results
    };

    query = `
        SELECT P_NP, ID, NUMBER, file.TYPE, TASK_NAME
        FROM parsing_data_sequence_file parse, file
        WHERE parse.FILE_ID = file.ID AND parse.P_NP IS NOT NULL AND parse.EVALUATOR_ID = 
    ` + id + ';';

    results = DBConn.MakeQuery(query);
    if(results == -1) return stats.ERROR_DB_CONNECTION_FAIL;
    if(results[0] == null) return stats.ERROR_NO_ID;

    ret.evaluated_list = results;

    res.json(ret)

    // var my_todo_id = [];
    // var my_evaluated_id = [];
    // for (let i = 0; i < tasks.length; i++) {
    //     if (tasks[i].evaluator_id === id) {
    //         if (tasks[i].p_np === null) {
    //             my_todo_id.push(tasks[i].file_id)
    //         } else {
    //             my_evaluated_id.push({
    //                 file_id: tasks[i].file_id,
    //                 p_np: tasks[i].p_np
    //             })
    //         }
    //     }
    // }
    // var my_todo_return = [];
    // my_todo_id.forEach(element => {
    //     var obj = files.filter(function (object) {
    //         return object.id === element
    //     })[0];
    //     my_todo_return.push(obj)
    // });
    // var my_evaluated_return = [];
    // my_evaluated_id.forEach(element => {
    //     var obj = files.filter(function (object) {
    //         return object.id === element.file_id
    //     })[0];
    //     obj.p_np = element.p_np;
    //     my_evaluated_return.push(obj)
    // });
    // res.json({
    //     todo_list: my_todo_return,
    //     evaluated_list: my_evaluated_return
    // })
});

router.get('/:userID/:taskID', function (req, res, next) {
    var userID = req.params.userID;
    var taskID = req.params.taskID;

    var query = `
        SELECT DUPLICATED_TUPLE_NUMBER, ALL_TUPLE_NUMBER, ID, NUMBER, START_PERIOD, END_PERIOD, file.TYPE, TASK_NAME
        FROM parsing_data_sequence_file parse, file
        WHERE parse.FILE_ID = file.ID AND FILE_ID = 
    ` + taskID + ';';

    var results = DBConn.MakeQuery(query);
    if(results == -1) return stats.ERROR_DB_CONNECTION_FAIL;
    if(results[0] == null) return stats.ERROR_NO_ID;

    res.json({
        task: results[0]
    })

    // var task = files.filter((object) => {
    //     return object.id === taskID;
    // })[0];
    // var tmp = tasks.filter(function (object) {
    //     return object.file_id === taskID;
    // })[0];
    // var taskEval = {
    //     totalTupleCount: tmp.all_tuple_number,
    //     duplicateTupleCount: tmp.duplicated_tuple_number,
    //     nullColRate: {
    //         A: 0,
    //         B: 0,
    //         C: 1,
    //         D: 0
    //     }
    // };
    // res.json({
    //     task: task,
    //     taskEval: taskEval
    // })
});

module.exports = router;
