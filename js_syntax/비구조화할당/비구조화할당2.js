const object = {a: 1, b: 2};

const { b, a } = object;

console.log(a); // 1
console.log(b); // 2

const object2 = {aa: 1, bb: 2};
const {aaa, aa} = object2;

console.log(aaa); // undefined
console.log(aa); // 1

/*
비구조화 할당
- 할당할 때 새로운 변수에 넣어주는데, 이 때 새로운 변수의 이름이 해당하는 객체 안에 있는 key의 이름과 동일해야 해당하는 key의 value를 가져와서 저장함.
*/