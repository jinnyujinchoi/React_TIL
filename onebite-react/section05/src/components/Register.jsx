import { useState, useRef } from "react"

// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  })

  // Ref 변수는 리렌더링x
  const countRef = useRef(0)
  const inputRef = useRef()

  const onChange = (e) => {
    // 변화가 있을 때마다, countRef를 증가시켜 보자
    countRef.current ++
    console.log(countRef)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <div>
        <input
          // 제출 시, 이름 DOM 요소에 포커싱
          ref={inputRef}
          name='name'
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name='birth'
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select
          name='country'
          value={input.country}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name='bio'
          value={input.bio}
          onChange={onChange}
        />
      </div>
      {/* 제출 버튼 추가 */}
      <button
        onClick={onSubmit}
      >
        제출</button>
    </div>
  )
}

export default Register