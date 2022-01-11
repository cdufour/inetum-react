import { useState } from 'react'

const Counter = () => {
  
  const [counter, setCounter] = useState(0)

  const handleCounter = (operation = "inc") => {
    if (operation === "inc") {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <p>
      Compteur: { counter }
      <button onClick={ () => handleCounter() }>Incrémenter</button>
      <button onClick={ () => handleCounter("dec") }>Décrémenter</button>
    </p>
  )

}

export default Counter