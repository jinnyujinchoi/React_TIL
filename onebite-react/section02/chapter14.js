// async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 promise를 반환하도록 해주는 키워드

async function getData() {
  // return {
  //   name: '최유진',
  //   id: 'jinny',
  // }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: '최유진',
        id: 'jinny',
      })
    }, 1500)
  })
}

console.log(getData())

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// await는 무조건 async가 붙었을 때만!
async function printData() {
  const data = await getData()
  console.log(data)
}

printData()