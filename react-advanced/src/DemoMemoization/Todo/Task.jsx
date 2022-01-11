import { useEffect } from "react"

const Task = ({ task }) => {

  useEffect(() => {
    console.log("Rendering <Task />...")
  })

  return (<li>{ task }</li>)
}

export default Task