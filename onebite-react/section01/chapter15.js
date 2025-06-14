// 객체란?
// 현실세계에 존재하는 '어떤 사물이나 개념'을 표현하기에 용이

// 1. 객체 생성 방법 두 가지
let obj1 = new Object() // 1-1. 객체 생성자
let obj2 = {} // 1-2. 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성))
let person = {
  name: '최유진', // name -> key, 최유진 -> value 'name 프로퍼티'라고 부름
  age: 27,
  hobby: '테니스',
  job: 'FE Developer',
  extra: {},
  10: 20,
  'like cat': true
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name
console.log(name)

let age = person['age'] // 프로퍼티는 꼭 "따옴표"와 함께 접근
console.log(age)

let property = 'hobby' // 이런 방법도 있다!
let hobby = person[property]
console.log(hobby)

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = 'fe developer'
person['favoriteFood'] = '떡볶이'
console.log(person)

// 3.3 프로퍼티 수정하는 방법
person.job = 'educator'
person['favoriteFood'] = '초콜릿'

// 3.4 프로퍼티 삭제하는 방법
delete person.job
delete person['favoriteFood']

// 3.5 프로퍼티 존재 유무 확인하는 방법 (in 연산자)
let result1 = 'name' in person
let result2 = 'favoriteFood' in person
console.log(result1)
console.log(result2)