import useSWR from "swr"
import { StyledCard, StyledHeader, StyledType, StyledTypes } from "./Pokemon.styled"

const Pokemon = ({ pokemonName }) => {

  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

  if (!data) return <div>Chargement...</div>

  const { id, name, sprites, types } = data
  const pokemonTypes = types.map(t => t.type.name)

  return (
    <StyledCard pokemonType={pokemonTypes[0]}>
      <StyledHeader>
        <h2>{name}</h2>
        <div>#{id}</div>
      </StyledHeader>

      <img src={sprites.front_default} alt={name} />

      <StyledTypes>
        { pokemonTypes.map(t => (
          <StyledType key={t}>{t}</StyledType>
        )) }
      </StyledTypes>


    </StyledCard>
  )

}

export default Pokemon