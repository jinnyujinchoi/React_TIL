// 1. Falsy한 값
let f1 = undefined
let f2 = null
let f3 = 0
let f4 = -0
let f5 = NaN
let f6 = ""
let f7 = 0n  // 아주 큰 값

if (!f1) {
  console.log('falsy한 값입니다.')
}

// 2. Truthy 한 값
let t1 = 'hello'
let t2 = 123
let t3 = []
let t4 = {}
let t5 = () => {}

if (t1) {
  console.log('truty한 값입니다.')
}

// 3. 활용 사례

function printName(person) {
  // truthy/falsy 조건 달아주기
  // undefined or null 일 때는 값이 없다고 명시
  // if (person === undefined || person === null)
  if (!person) {
    console.log('person값이 없음')
    return // 아래에 접근하지 못하도록 return
  }
  console.log(person.name)
}
// let person = { name: '최유진' }
// printName(person)
// 만약 변수가 undefined 된다면?
let person = null
printName(person)