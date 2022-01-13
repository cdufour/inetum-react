import { Suspense } from "react"
import { SWRConfig } from "swr"
import fetcher from "./Pokemon/fetcher"
import Pokedex from "./Pokemon/Pokedex"
import { StyledPokedex, StyledTitle } from "./Pokemon/Pokemon.styled"

const App = () => {

  return (
    <>
      <StyledTitle>Pokedex</StyledTitle>

      <SWRConfig value={{ fetcher, suspense: true }}>
        <StyledPokedex>
          <Suspense fallback={<h2>Chargement du Dex...</h2>}>
            <Pokedex />
          </Suspense>
        </StyledPokedex>
      </SWRConfig>
    </>

  
  )

}

export default App