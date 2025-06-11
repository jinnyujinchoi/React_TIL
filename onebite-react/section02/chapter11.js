console.log(1)

setTimeout(()=>{
  console.log(2)
}, 3000)
// 3000ms 이후, 콜백함수 실행

console.log(3)

// JS에서 비동기 작업들은
// JS 엔진이 아닌, 'Web APIs'에서 실행됨
// Web APIs -> 웹 브라우저가 직접 관리하는 별도의 영역
// 즉, setTimeout만 Web APIs로 넘긴 것