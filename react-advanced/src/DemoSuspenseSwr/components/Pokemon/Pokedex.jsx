import useSWR from "swr"
import Pokemon from "./Pokemon"

const Pokedex = () => {

  const { data } = useSWR("https://pokeapi.co/api/v2/pokemon?limit=5")

  if (!data) return <p>no data</p>

  return (
    <>
      { data.results.map(pokemon => (
        <Pokemon key={pokemon.name} pokemonName={pokemon.name} />
      )) }
    </>
  )

}

export default Pokedex