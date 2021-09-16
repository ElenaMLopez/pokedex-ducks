import { useDispatch } from 'react-redux';
import { getPokemonsAction } from '../redux/pokemonsDuck';

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="main-header">
      <div className="header-container">
        <img src="/images/pokeball.png" alt="PokeBall" className="logo"/>
        <div className="header-buttons">
          <button onClick={() => dispatch(getPokemonsAction(0))} className="btn">Get Pokemons</button>
          <button onClick={() => dispatch(getPokemonsAction(12))} className="btn">Load more</button>
        </div>
      </div>
    </header>
  )
}

export default Header
