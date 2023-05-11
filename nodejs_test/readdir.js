var fs = require('fs');   // file system 모듈 가져오기
var path = require('path');
var dir = path.join(__dirname,'public/data');   // 파일 목록 읽어올 폴더

fs.readdir(dir, function(err, filelist){
	console.log(filelist); // ['test1', 'test2', 'test3']
});
// 첫번째 인자 : 파일 목록을 읽을 폴더(dir)
// 두번째 인자 : 폴더(dir)의 파일목록(filelist) -> 배열로 가져옴