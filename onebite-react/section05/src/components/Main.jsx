import "./Main.css"

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// (Boolean, undefined, null 등은 안됨)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다. -> 여기선 'main'

const Main = () => {
  const user = {
    name: '최유진',
    isLogin: 'true',
  }

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>
  } else {
    return <div>로그인</div>
  }

  // 위 방법과 동일
  // return (
  //   <main>
  //   {user.isLogin ? (
  //     <div>로그아웃</div>
  //   ) : (
  //     <div>로그인</div>
  //   )}
  //   </main>
  // )
}


// 참고용!
// const Main = () => {
//   const number = 10
//   const obj = { a: 1 }

//   return (
//     // 최상위 태그는 하나만
//     <main>
//       <h1>main</h1>
//       <h2>{number % 2 === 0 ? "짝수" : "홀수" }</h2>
//       {obj.a}
//       {/* true, undefined, null 은 렌더링 x */}
//     </main>
//   )
// }


export default Main