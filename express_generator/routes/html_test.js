var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('html', { 
    title: 'html',
    text: 'aaptest' 
  });
});

module.exports = router;
