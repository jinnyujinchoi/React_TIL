function returnFalse() {
  console.log('False 함수')
  return false
}

function returnTrue() {
  console.log('True 함수')
  return true
}

console.log(returnFalse() && returnTrue())
// False and 어떤것 -> 무조건 False
// 단락평가o, 무조건 false
console.log(returnTrue() && returnFalse())
// 단락평가x, 앞이 False 면 무조건 False

console.log(returnFalse() || returnTrue())
// 단락평가x
console.log(returnTrue() || returnFalse())
// 단락평가o, 무조건 true

// ** && ** -> False가 먼저 오면 단락평가
// ** || ** -> True가 먼저 오면 단락평가
// truty&falsy도 해당


// 단락 평가 활용 사례

function printName(person) {
  // person 객체가 있다면 name 저장
  // 둘 다 truty면 뒤의 값 반환
  const name = person && person.name
  // name이 있다면 name, 없다면 문자열 반환
  console.log(name || 'person값이 없음.')
}

printName()