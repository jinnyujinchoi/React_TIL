// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3]

// let one = arr[0]
// let two = arr[1]
// let three = arr[2]
// 불편하다..!

let [one, two, three, four=4] = arr
console.log(one, two, three, four)

// 2. 객체의 구조 분해 할당
let person = {
  name: '최유진',
  age: 27,
  hobby: '테니스'
}

let {
  // 변수 이름 변경 가능
  age: myAge,
  name,
  hobby,
  extra='hello'
} = person
console.log(name, myAge, hobby, extra)

// 3. 객체 구조 분해 할당 이용해 함수의 매개변수를 받는 방법
// 매개변수에도 구조 분해 할당 가능
const func = ({name, age, hobby, extra}) => {
  console.log(name, age, hobby, extra)
}

func(person)