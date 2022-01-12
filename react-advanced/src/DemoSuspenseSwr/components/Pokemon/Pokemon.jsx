import useSWR from "swr"

const Pokemon = ({ pokemonName }) => {

  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  if (!data) return <div>Chargement...</div>

  return (
    <div>{ data.id }</div>
  )

}

export default Pokemon