const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');

const app = express();
const upload = multer({ dest: 'uploads/' }); // 해당 경로에 디렉토리에 파일 업로드

app.get('/', (req,res,next) => {
  let contents = '';
  contents += `
  <html><body>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="excelFile">
      <input type="text" name="message">
      <input type="submit" value="Upload">
      <div>
        <input type='checkbox' id='inflation_apply' name='inflation_apply' value='1'></input>
      </div>
    </form>
  </body></html>
  `;
  res.send(contents);
});

// upload.none(): only for text-only multipart form
// upload.single('name 속성값'): only one file
app.post('/upload', upload.single('excelFile'), (req, res) => {
  const filePath = req.file.path;
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  console.log(data); // 엑셀 데이터 처리

  console.log(req.body); // input text에 입력한 값 넣어져있음

  console.log(req.file); // multer 미들웨어 사용시 req객체에 file 프로퍼티가 생김 -> 전송되는 파일이 1개일 때

  console.log(req.files); // undefined -> 전송되는 파일이 여러개일 때는 여기에 파일 정보가 담김
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
