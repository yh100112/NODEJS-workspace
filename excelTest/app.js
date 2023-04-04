const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const multiparty = require('multiparty'); // form 데이터를 json으로 처리
const xlsx = require('xlsx');
 
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: '150mb',
  extended: false,
}));

 
app.get('/', (req, res, next) => {
  let contents = '';
  contents += '<html><body>';
  contents += '   <form action="/" method="POST" enctype="multipart/form-data">';
  contents += '       <input type="file" name="xlsx" />';
  contents += '       <input type="submit" />';
  contents += '   </form>';
  contents += '</body></html>';
  res.send(contents);
});
 
app.post('/', (req, res, next) => {
  const resData = {};

  const form = new multiparty.Form({
    autoFiles: true,
  });

  form.on('file', (name, file) => {
    const workbook = xlsx.readFile(file.path); // xlsx를 이용해 전달된 파일을 객체로 변환한다.
    const sheetnames = Object.keys(workbook.Sheets);

    let i = sheetnames.length;

    // 시트별 내용을 결과 객체에 담는다.
    while (i--) {
      const sheetname = sheetnames[i];
      resData[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]); // 시트의 내용을 json객체로 변환하는 작업 수행
    }
  });

  form.on('close', () => {
    res.send(resData);
  });

  form.parse(req);
});
 
http.createServer(app).listen(3000, () => {
  console.log('HTTP server listening on port ' + 3000);
});