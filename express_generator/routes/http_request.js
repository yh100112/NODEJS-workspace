var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('http_request', { 
    title: 'Express'
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  let {age, grade} = req.body;
  console.log(age + ' ' + grade); // 17 A+
  console.log("post 방식으로 서버로 전송 성공!~~~~~~~~~~~~~~");
  res.send();
});

module.exports = router;
