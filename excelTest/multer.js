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
      <input type="submit" value="Upload">
    </form>
  </body></html>
  `;
  res.send(contents);
});

// single('name속성명') -> 파일 1개를 받음
app.post('/upload', upload.single('excelFile'), (req, res) => {
  const filePath = req.file.path;
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  console.log(data); // Do something with the data
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
