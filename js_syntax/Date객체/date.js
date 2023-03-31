let date = new Date();
console.log(date); // 2023-03-30T08:45:27.161Z

// 특정 날짜 지정
let date2 = new Date("December 14, 1977 13:30:00"); 
console.log(date2); // 1977-12-14T04:30:00.000Z

// 날짜 양식 ISO
let date3 = new Date("1977-12-14T13:30:00");
let date4 = new Date("1977-12-14");
console.log(date3); // 1977-12-14T04:30:00.000Z
console.log(date4); // 1977-12-14T00:00:00.000Z


// 날짜 양식 Long
let date5 = new Date("1982/02/19"); // YYYY/MM/DD
console.log(date5); // 1982-02-18T15:00:00.000Z