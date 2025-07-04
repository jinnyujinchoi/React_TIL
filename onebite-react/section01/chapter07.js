// 1. 대입 연산자
let var1 = 1

// 2. 산술 연산자
let num1 = 3 + 2
let num2 = 3 - 2
let num3 = 3 * 2
let num4 = 3 / 2
let num5 = 3 %+ 2

let num6 = (1 + 2) * 10
console.log(num6)

// 3. 복합 대입 연산자(산술 + 연산)
let num7 = 10
num7 += 20
num7 -= 20
// 연산자는 모두 가능
console.log(num7)

// 4. 증감 연산자
let num8 = 10
let num9 = 10
console.log(num8++) // 후위 연산
console.log(++num9) // 전위 연산

// 5. 논리 연산자
let or = true || false // true

let and = true && false // false

let not = !true // false

console.log(or, and, not)

// 6. 비교 연산자
let comp1 = 1 === 2 // false
let comp2 = 1 !== 2 // true
console.log(comp1, comp2)

// 동등기호 3개 쓰는 이유 -> 자료형까지 비교(권장)

let comp3 = 2 > 1 // true
let comp4 = 2 < 1 // false
console.log(comp3, comp4)