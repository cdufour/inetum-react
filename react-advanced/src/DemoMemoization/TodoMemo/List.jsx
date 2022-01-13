import { useEffect, memo } from "react"
import Task from "./Task"

const List = ({ todoList, onSignal }) => {

  useEffect(() => {
    console.log("Rendering <List />...")
  })

  return (
    <>
      <ul style={{listStyle: "none"}}>
        { todoList.map(todo => (
          <Task key={todo.id} task={todo.task} />
        ))  }
      </ul>
      <button onClick={onSignal}>Update parent</button>
    </>
  )
}

export default memo(List)