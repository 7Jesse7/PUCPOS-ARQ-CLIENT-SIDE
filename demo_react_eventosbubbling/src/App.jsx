
import './App.css';
import { Botao } from './components/Botao';
import { Botao2 } from './components/Botao2';

function App() {
  const handleClick = (event) => {
    alert(`Clicou ${event.currentTarget.id}`);
  };

  return (
    
      <div id='divApp' onClick={handleClick}>
        <Botao />
        <Botao2 />        
      </div>
    
  );
}

export default App;
