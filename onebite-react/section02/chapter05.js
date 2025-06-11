// 객체타입은 원본을 수정한다..(참조값이 존재) -> 가변값
// 원시타입은 원본값 수정ㅌ -> 불변값

// 예시
let o1 = { name: '최유진' }
let o2 = o1
// 얕은 복사 -> 원본값 변경 우려
let o3 = {...o1}
// 깊은 복사(프로퍼티만 가지고 오기) -> 권장

// 얕은 비교
console.log(o1 === o2) // true
// 깊은 비교 : 객체 -> 문자열로 변환하여 비교
console.log(JSON.stringify(o1) === JSON.stringify(o2)) // true
console.log(o1 === o3) // false -> 참조값이 다르기 때문
