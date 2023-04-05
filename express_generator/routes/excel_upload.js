
var express = require('express');
var router = express.Router();
const multiparty = require('multiparty'); // form 데이터를 json으로 처리
const xlsx = require('xlsx');

router.get('/', function(req, res, next) {
  res.render('excel_upload', {});
});

router.post('/create', (req, res) => {
  const resData = {};
  const form = new multiparty.Form();

  form.on('field', (name, value) => {
    console.log('Field:', name, value);
  });

  form.on('file', (name, file) => {
    const filePath = file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetnames = Object.keys(workbook.Sheets);

    let i = sheetnames.length;
    while (i--) {
      const sheetname = sheetnames[i];
      resData[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]);
      console.log(resData[sheetname]); // excel data
    }
  });

  form.on('error', function(err) {
    console.log('에러명: ' + err.stack);
  });

  form.on('close', () => {
    console.log('엑셀 파일 업로드 완료!');
    res.send();
  });

  form.parse(req);
  console.log(req.headers['content-type']); // multipart/form-data
  console.log(req.body); // text 데이터 담김 ( input type=file이 아닌 모든 input들 )
});

module.exports = router;
