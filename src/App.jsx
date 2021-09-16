import './App.css';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import Header from './components/Header';
import Pokemons from './components/Pokemons';


function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Header />
      <Pokemons />
    </Provider>
  );
}

export default App;
