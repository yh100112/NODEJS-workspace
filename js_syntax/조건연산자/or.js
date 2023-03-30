
// 피연산자가 true false인 경우
console.log(true || false); // true
console.log(false || false); // false
let hour = 15;
if (hour < 10 || hour > 18) {
  console.log('영업시간이 아닙니다.');
}

/*
자바스크립트에서만 제공하는 논리연산자 OR의 추가기능
< 피연산자가 true, false가 아닌 경우 >
- 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나아가며 피연산자 평가
- 각 피연산자를 불린형으로 변환한 후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
- 피연산자 모두를 평가한 경우(모든 피연산자가 false로 평가된 경우) 엔 마지막 피연산자 값 반환
*/
let a = "" || "" || "바이올렛";
console.log(a); // 바이올렛 -> 마지막 피연산자 반환

let b = 10 || 1;
console.log(b); // 10 -> 첫 피연산자 10이 불린형으로 반환하면 true이므로 변환 전 값인 10을 반환하고 종료