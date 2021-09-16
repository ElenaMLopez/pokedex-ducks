import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

function PokemonsList() {
  const pokemons = useSelector(store => store.pokemons.pokemons);

  return (
    <div>
      <ul className="pokemons-list">
        { pokemons.map( item => (
          <li key={item.name} className="pokemon-list_element">
            <PokemonCard image={item.image} name={item.name}/>
          </li>
          ))
        }     
      </ul>     
    </div>
  )
}

export default PokemonsList
