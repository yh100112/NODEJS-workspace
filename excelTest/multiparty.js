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

// home page 
app.get('/', (req, res, next) => {
  let contents = '';
  contents += `
  <html><body>
    <form action="/" method="POST" enctype="multipart/form-data">
      <input type="file" name="excel_upload" accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
      <input type="submit"/>
    </form>
  </body></html>
  `;
  res.send(contents);
});
 
app.post('/', (req, res, next) => {
  const resData = {};

  // const form = new multiparty.Form({
  //   autoFiles: true,
  // });
  const form = new multiparty.Form();

  // file을 옵션으로 주면 자동으로 autoFiles가 true로 세팅됨
  form.on('file', (name, file) => {
    const filePath = file.path;
    const workbook = xlsx.readFile(filePath);        // xlsx를 이용해 전달된 파일을 객체로 변환한다.
    const sheetnames = Object.keys(workbook.Sheets); // 엑셀 sheet 이름들이 배열로 담김

    let i = sheetnames.length;

    // sheet가 여러개일 때 처리
    while (i--) {
      const sheetname = sheetnames[i];
      resData[sheetname] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetname]); // 시트의 내용을 json객체로 변환하는 작업 수행
      console.log(resData[sheetname]);
    }
  });

  form.on('close', () => {
    console.log('파일 서버에 업로드 완료!');
    res.send(resData);
  });

  form.parse(req);
});
 
http.createServer(app).listen(3000, () => {
  console.log('HTTP server listening on port ' + 3000);
});