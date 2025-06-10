// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자

let var1
let var2 = 10
let var3 = 20

let var4 = var1 ?? var2
// undefined vs var2 -> var2
let var5 = var1 ?? var3
// undefined vs var3 -> var3
let var6 = var2 ?? var3 // ?

console.log(var4) // 10
console.log(var5) // 20
console.log(var6) // var2

// 실무 예시
let userName = '최유진'
let userNickName = 'subakchoigo'

let displayName = userName ?? userNickName
console.log(displayName)
// userName이 있다면 -> userName
// 없다면 userNickName 으로 대체


// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1
var7 = 'hello'
var7 = 20

let t1 = typeof var7
console.log(t1)


// 3. 삼항 연산자
// -> 조건식을 이용해서 참이나 거짓일 때의 값을 다르게 반환
let var8 = 10

// 요구사항 : 변수 res에 var8의 값이 짝수이면 -> 짝, 홀수면 -> 홀
let res = var8 % 2 === 0 ? '짝' : '홀'
// 변수 = 조건 ? 참 : 거짓
console.log(res)