// 함수 선언

function greeting () {
  console.log('안녕하세요')
}

console.log('호출 전')
greeting() // 함수는 호출해줘야 실행 됨!
console.log('호출 후')

// 직사각형 넓이 구하기
function getArea (w, h) { // 매개변수
  // 중첩함수 넣기
  function another () {
    console.log('another')
  }

  another() // 호출 필수!

  let area = w * h
  // console.log(area)
  return area
  // return 아래 명령은 실행되지 않음
}

let area1 = getArea(10, 20)
console.log(area1)
getArea(10, 20) // 인수
getArea(30, 20)

// 이 위치에 함수 선언이 와도 무방
// **JS에서는 '함수 위치' 상관없이 함수 실행됨**
// '호이스팅' 때문