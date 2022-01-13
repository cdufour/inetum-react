import useSWR from "swr"

const Pokemon = ({ pokemonName }) => {

  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  if (!data) return <div>Chargement...</div>

  const { id, name, sprites, types } = data
  const pokemonTypes = types.map(t => t.type.name)

  return (
    <>
      <h2>{name}</h2>
      <div>#{id}</div>

      <img src={sprites.front_default} alt={name} />

      { pokemonTypes.map(t => (
        <p key={t}>{t}</p>
      )) }
    </>
  )

}

export default Pokemon