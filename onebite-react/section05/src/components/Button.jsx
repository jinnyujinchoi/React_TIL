const Button = ({children, text, color='black'}) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e)
    console.log(text)
  }
  
  return (
    <button
      onClick={onClickButton}
      // 마우스 커서 댔을시, 발생하는 이벤트
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button