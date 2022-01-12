import { useState, useEffect, useMemo, useCallback } from "react"
import List from "./List"

const initialTodos = [
  { id: 1, task: "Apprendre le russe" },
  { id: 2, task: "Réparer mon vélo" },
]

const App = () => {

  const [todoList, setTodoList] = useState(initialTodos)
  const [task, setTask] = useState("")
  const [search, setSearch] = useState("")

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

  const handleSearch = () => {
    setSearch(task)
  }

  const handleInput = e => {
    setTask(e.target.value)
  }

  const handleChildSignal = useCallback(() => {
    setTask((t) => t + "child")
  }, [])
  
  // (ré)exécuté que si search ou todoList changent
  const filteredTodoList = useMemo(() => 
    todoList.filter(todo => {
      console.log("Filter callback")
      return todo.task.includes(search) 
    }), [search, todoList])

  return (
    <>
      <input 
        type="text" 
        value={task} 
        onChange={ handleInput } 
      />
      <button onClick={handleClick}>Ajouter</button>
      <button onClick={handleSearch}>Rechercher</button>
      <List todoList={filteredTodoList} onSignal={handleChildSignal} />
    </>
  )
}

export default App