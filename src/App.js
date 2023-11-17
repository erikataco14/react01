import logo from './logo.svg';
import './App.css';
import AppLista from './protegido/AppLista';
/*import C01componente from './componentes/C01componente';
import C02contador from './componentes/C02contador';
import Variables from './componentes/C04variables';
import C06matriz from './componentes/C06matriz';*/

function App() {
  return (
    <div style={{background:"violet",width:"350px", padding:"10px"}}>
    <h1>App.js</h1>
    <AppLista />
    {/* <C01componente />
    <C02contador />
    <Variables xVariable="Hola Mundo" />
  <C06matriz /> */}
    </div>
  );
}

export default App;
