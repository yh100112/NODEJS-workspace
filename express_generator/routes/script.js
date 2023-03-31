var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('script_tag', { 
    title: 'script태그 사용예시',
    text: 'aaptest' 
  });
});

module.exports = router;
