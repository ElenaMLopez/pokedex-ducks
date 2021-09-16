
function PokemonCard({image, name}) {

  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image"/>
      <h2 className="capitalize pokemon-name">{name}</h2>    
    </div>
  )
}

export default PokemonCard
