import { useEffect } from "react"
import Task from "./Task"

const List = ({ todoList }) => {

  useEffect(() => {
    console.log("Rendering <List />...")
  })

  return (
    <ul style={{listStyle: "none"}}>
      { todoList.map(todo => (
        <Task key={todo.id} task={todo.task} />
      ))  }
    </ul>
  )
}

export default List