import { SWRConfig } from "swr"
import fetcher from "./Pokemon/fetcher"
import Pokedex from "./Pokemon/Pokedex"

const App = () => {

  return (
    <SWRConfig value={{ fetcher, suspense: false }}>
      <Pokedex />
    </SWRConfig>
  )

}

export default App