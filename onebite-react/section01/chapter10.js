// for문
// for (초기식; 조건식; 증감식) {
// 실행문
// }
for (let idx=0; idx < 5; idx++) {
  console.log(`${idx}번째 반복 중!`)
}

for (let idx=0; idx <= 10; idx++) {
  console.log(`${idx}번째 반복 중!`)

  // for 문 내부에서 조건 분기 가능
  if (idx >= 5) {
    break;
  }
}

// +) 홀수만 출력하기
for (let idx=0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue
  }
  console.log(idx)

  if (idx >= 5) {
    break
  }
}
