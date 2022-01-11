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

  // const filteredTodoList = todoList.filter(todo => {
  //   console.log("Filter callback")
  //   return todo.task.includes(search) 
  // })

  const filteredTodoList = useMemo(() => 
    todoList.filter(todo => {
      console.log("Filter callback")
      return todo.task.includes(search) 
    }), [search, todoList])

  const handleDelete = (todoId) => {
    const newTodoList = todoList.filter(todo => todo.id !== todoId)
    setTodoList(newTodoList)
  }

  return (
    <>
      <input 
        type="text" 
        value={task} 
        onChange={ e => setTask(e.target.value) } 
      />
      <button onClick={handleClick}>Ajouter</button>
      <button onClick={handleSearch}>Rechercher</button>

      <button onClick={ () => handleDelete(1) }>Supprimer todo 1</button>

      <List todoList={filteredTodoList} />
    </>
  )
}

export default App