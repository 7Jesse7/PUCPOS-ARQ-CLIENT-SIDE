import './App.css';
import { FormularioControlado } from './components/FormularioControlado';
import { FormularioNaoControlado } from './components/FormularioNaoControlado';


function App() {
  return (
    <>
      <FormularioNaoControlado />
      <FormularioControlado />
    </>
  );
}


export default App;
