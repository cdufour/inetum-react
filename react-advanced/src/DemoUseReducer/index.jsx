import { useReducer } from "react";

const initialTodos = [
  { id: 1, title: "Apprendre le russe", completed: false },
  { id: 2, title: "Réparer mon vélo", completed: false }
]

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
    case "DELETE":
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

const DemoUseReducer = () => {

  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo) => {
    // action dispatching
    dispatch({ type: "COMPLETE", id: todo.id })
  }

  const handleDelete = (todo) => {
    dispatch({ type: "DELETE", id: todo.id })
  }

  return (
    <>
      { todos.map(todo => (
        <div key={todo.id}>
          <label>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleComplete(todo)}
            />
            <span>{todo.title}</span>
            <button onClick={ () => handleDelete(todo)}>X</button>
          </label>
        </div>
      )) }
    </>
  )
}

export default DemoUseReducer