import { useState } from "react";

// custom hook 만들어주기
// 커스텀훅 내부에서는 훅 호출 가능
function useInput() {
  const [input, setInput] = useState("")

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return [input, onChange]
}

export default useInput