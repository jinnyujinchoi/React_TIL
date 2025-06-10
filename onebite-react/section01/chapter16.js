// 1. 상수 객체
const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
}

animal.age = 2 // 프로퍼티 추가
animal.name = '까망이' // 프로퍼티 수정
delete animal.color // 프로퍼티 삭제

// 요 행위들은 '상수 객체' 여도 가능!
console.log(animal)

// animal = 123 -> 아예 '새로운 값' 할당은 x

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: '최유진',
  // 메서드 선언기법
  sayHi() {
    console.log('안녕!')
  }
}

person.sayHi() // 메서드 선언
person['sayHi']() // 동일하게 메서드 선언