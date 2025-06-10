// 형 변환
// 어떤 값의 타입을 다른 타입으로 변경

// 묵시적 -> 자바스크립트 엔진이 눈치껏 변환
// 명시적 -> 개발자가 직접 '함수' 이용하여 형 변환

// 1. 묵시적
let num = 10
let str = '20'

const result = num + str
// 묵시적으로 형 변환 일어남
// console.log(result)

// 2. 명시적
// -> 내장함수 등을 이용하여 직접 현 변환 명시
// -> 문자열 -> 숫자
let str1 = '10'
let strToNum1 = Number(str1)
console.log(10 + strToNum1)

let str2 = '10개'
let strToNum2 = parseInt(str2)
// parseInt -> 앞은 숫자+문자형 숫자형으로 변경
console.log(strToNum2)

// -> 숫자 -> 문자열
let num1 = 20
let numToStr1 = String(num1)
console.log(numToStr1 + '입니다.')