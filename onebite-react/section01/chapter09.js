// 1. if 조건문
let num = 10
num = 9

if (num >= 10) {
  // console.log("num은 10 이상입니다.")
  // console.log('조건이 참 입니다!')
}
// 여러개 조건 분기 가능
else if (num >= 5) {
  // console.log('num은 5 이상입니다.')
}
else if (num >= 3) {
  // console.log('num은 3 이상입니다.')
}
else {
  // console.log('조건이 거짓입니다.')
}

// 2. Switch 문
// -> if문 기능 자체는 동일
// -> 다수의 조건을 처리할 때 훨씬 '직관적'


let animal = 'cat'
animal = 'owl'

switch (animal) {
  case 'cat':{
    console.log('고양이')
    // switch는 수직으로 모든 case실행하므로
    break // break 처리 필수
  }
  case 'dog':{
    console.log('강아지')
    break
  }
  case 'bear':{
    console.log('곰')
    break
  }
  case 'snake':{
    console.log('뱀')
    break
  }
  case 'tiger':{
    console.log('호랑이')
    break
  }
  // 어느것도 해당하지 않을 때,
  default: {
    console.log('저는 그런 동물은 모릅니다.')
  }
}