import { useState, useEffect } from "react"
import List from "./List"

const initialTodos = [
  { id: 1, task: "Apprendre le russe" },
  { id: 2, task: "Réparer mon vélo" },
]

const App = () => {

  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState("")

  useEffect(() => {
    console.log("Rendering <App />...")
  })

  const handleClick = () => {
    const newTodo = { id: Date.now(), task }

    // ajout du nouveau todo dans le state
    setTodoList([...todoList, newTodo])

    // reset de l'input
    setTask("")
  }

  return (
    <>
      <input 
        type="text" 
        value={task} 
        onChange={ e => setTask(e.target.value) } 
      />
      <button onClick={handleClick}>Ajouter</button>
      <List todoList={todoList} />
    </>
  )
}

export default App