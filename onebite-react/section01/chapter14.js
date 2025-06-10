// 스코프 : 변수, 함수에 접근할 수 있는 범위
// -> 전역(전체 영영ㄱ) 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1 // 전역 스코프

function funcA() {
  let b = 2 // 지역 스코프
  console.log(a)

  function funcB() {} // **지역**
}

funcA()
// funcB() -> 함수 또한 지역스코프
// console.log(b) -> 오류 발생

if (true) {
  let c = 1 // 지역 스코프
  function funcC() {} // 전역
}

// console.log(c) -> 오류 발생
funcC() // 오류 발생 x

for (let i = 0; i < 10; i++) {
  let d = 1 // 지역 스코프
  // +) 반복문 초기식도 지역 스코프

  function funcD() {} // 전역
}

// console.log(d) -> 오류 발생
funcD() // 오류 발생 x

// **그러나 조건, 반복문 안에서 '함수'는 지역 스코프 x
// 오로지 함수 선언식 내부의 함수만 '지역 스코프'