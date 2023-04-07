const obj = [
  {"uid": 100, "보상": 1000, "보상종류": 1},
  {"uid": 200, "보상": 2000, "보상종류": 2},
  {"uid": 300, "보상": 3000, "보상종류": 3}
];

obj.forEach((item) => {
  console.log(item.uid, item['보상'], item['보상종류']);
})