// 콜백 간단 예시
function main0(val) { // 호출 기능만 하는 함수
  val()
}

function sub0() { // 호출 당하는 함수 -> 콜백 함수
  console.log('sub')
}

// 괄호 안 sub -> 콜백 함수
main0(sub0) // sub

// 1. 콜백함수
function main(val) {
  console.log(1)
  console.log(2)
  val()
  console.log('end')
}

function sub() { // -> 콜백함수
  console.log('I am sub')
}
main(sub) // I am sub

// 위와 동일
main(() => {
  console.log('I am sub')
}) // I am sub


// 2. 콜백함수 활용
function repeat(cnt) {
  for(let idx = 1; idx <= cnt; idx++) {
    console.log(idx)
  }
}

function repeatDouble(cnt) {
  for(let idx = 1; idx <= cnt; idx++) {
    console.log(idx * 2)
  }
}

function repeatTriple(cnt) {
  for(let idx = 1; idx <= cnt; idx++) {
    console.log(idx * 3)
  }
}

repeat(5)
repeatDouble(5)
repeatTriple(5)
// -> 이런 상황에서 콜백함수 활용 가능

// 매개변수로 callback 함수를 넣어주기
function newRepeat(cnt, callback) {
  for (let idx = 1; idx <= cnt; idx++) {
    // 반복문 진행 후, 콜백 호출
    callback(idx)
  }
}

newRepeat(5, (idx) => { // 화살표 함수로 콜백 선언
  console.log(idx)
})

newRepeat(5, (idx) => {
  console.log(idx * 2)
})

newRepeat(5, (idx) => {
  console.log(idx * 3)
})
