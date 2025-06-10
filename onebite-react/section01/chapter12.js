// 1. 함수 표현식
// -> 호이스팅 x
function funcA () {
  console.log('funcA')
}

let varA = funcA
varA()

let varB = function funcB() {
  console.log('funcB')
}
// 위랑 동일한 함수
// let varB = function () {
//   console.log('funcB')
// }
varB()
// funcB() -> 실행 안됨, 익명함수로 만들어도 무방 


// 2. 화살표 함수
let varC = (val) => val + 1
// 조건을 추가하고 싶다면?{
let varD = (val) => {
  console.log(val)
  return val + 1
}


console.log(varC(10)) // 11
console.log(varD(10)) // 10 11