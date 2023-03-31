const numbers = [1,2,3,4,5];

numbers.forEach(function(item, index){
  console.log('index: ' + index + ' value: ' + item);
});
/*
index: 0 value: 1
index: 1 value: 2
index: 2 value: 3
index: 3 value: 4
index: 4 value: 5
*/

numbers.forEach(function(item){
  console.log(item);
});
/*
1
2
3
4
5
*/

const arr = [5,4,2,100,3];
arr.forEach(function(item){
  console.log(item);
});
/*
5
4
2
100
3
*/