import { useRef } from "react"

const Focus = () => {

  // refs directes au DOM réel
  const inputRef = useRef()
  const divRef = useRef()
  
  const handleClick = () => {
    inputRef.current.focus()
    divRef.current.innerText += "click! "
    divRef.current.style.color = "orange"
  }

  return (
    <>
      <div ref={divRef}></div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Set Focus</button>
    </>
  )

}

export default Focus