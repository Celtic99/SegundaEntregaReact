import './App.css';
import NavBarr from './components/NavBarr';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBarr/>
      <ItemListContainer greeting = "holaa"/>
    </div>
  );
}

export default App