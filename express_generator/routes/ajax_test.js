var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ajax_test', { 
    title: 'Express', // 렌더링 할 페이지에 전송할 데이터
    text: 'aaptest'  // 렌더링 할 페이지에 전송할 데이터
  });
});

module.exports = router;
