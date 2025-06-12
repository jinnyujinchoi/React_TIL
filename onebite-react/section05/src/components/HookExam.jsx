import useInput from "../hooks/useInput"

// hook 관련 3가지 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없다(=조건문 안에서 호출x)
// 3. 나만의 훅 {Custom Hook}을 직접 만들 수 있다.

const HookExam = () => {
  const [input, onChange] = useInput()
  const [input2, onChange2] = useInput()

  return (
    <div>
      <input value={input} onChange={onChange}/>
      <input value={input2} onChange={onChange2}/>
    </div>
  )
}

export default HookExam