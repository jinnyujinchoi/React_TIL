// promise?
// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 JS 내장 객체
// -> 비동기 작업을 감싸는 객체!

// 대기(Pending) ex.유튜브 영상 로딩중
// 승인(Fulfilled) ex.영상 송출
// 거절(Rejected) ex.로딩 실패

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor
  
    setTimeout(() => {
  
      if (typeof num === 'number') {
        resolve(num + 10)
      } else {
        reject('num이 숫자가 아닙니다')
      }
    }, 2000)
  })

  return promise
}


// then 메서드
// -> 그 후에

// promise.then((val) => {
//   console.log(val)
//   // promise 체이닝
// }).catch((err) => {
//   console.log(err)
// })

add10(0)
  .then((result) => {
    console.log(result)
    return add10(result)
  })
  .then((result) => {
    console.log(result)
    return add10(undefined)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })