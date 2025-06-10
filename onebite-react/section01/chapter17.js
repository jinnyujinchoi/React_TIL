// 배열?
// 여러개의 값을 '순차적'으로 담을 수 있는 자료형
// 객체는 -> 순서 x

// 1. 배열 생성 두 가지 방법
let arrA = new Array() // 1-1. 배열 생성자
let arrB = [] // 1-2. 배열 리터럴

let arrC = [
  1,
  2,
  3,
  true,
  'hello',
  null,
  undefined,
  () => {},
  {},
  [],
]

// 2. 배열 요소 접근
let item1 = arrC[0]
let item2 = arrC[1]

arrC[0] = 'hello' // 변경도 가능
console.log(item1, item2)
console.log(arrC)