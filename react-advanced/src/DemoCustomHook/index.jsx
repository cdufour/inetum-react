import useFetch from "./useFetch"

const DemoCustomHook = () => {
  
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos", 5)
  
  if (todos.length == 0) return (<p>No data</p>)

  return (
    <>
      { todos.map(todo => <p key={ todo.id }>{ todo.title }</p>) }
    </>
  )
}

export default DemoCustomHook