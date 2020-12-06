const express = require('express');
const router = express.Router();
// const Functions = require('../scripts/Functions')

router.get('/:taskName', function(req, res, next){
    console.log(req.params.taskName);
    res.json();
});

module.exports = router;