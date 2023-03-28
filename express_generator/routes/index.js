var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    text: 'aaptest' 
  });
  next();
});

router.get('/', function(req, res, next) {
  console.log('test2');
});

module.exports = router;
