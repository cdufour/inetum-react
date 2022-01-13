import { Suspense } from "react"
import useSWR from "swr"
import Pokemon from "./Pokemon"
import LoadingSkeleton from "./LoadingSkeleton"
import { StyledGrid } from "./Pokemon.styled"

const Pokedex = () => {

  const { data } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=200")

  if (!data) return <p>no data</p>

  return (
    <>
      { data.results.map((pokemon, index) => (
        <Suspense 
          key={index} 
          fallback={<StyledGrid><LoadingSkeleton /></StyledGrid>}>
          <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
        </Suspense>
      )) }
    </>
  )

}

export default Pokedex