import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const [colaboradores, setColaboradores] = useState([]) /* Criamos um useState de um array vazio, 
                                                           para que este armazene os colaboradores setados.*/

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]) /* O "..." é conhecido como "espalhar". Neste ponto do código, estamos espalhando
    os valores do array "colaboradores" e em seguida colocando o "colaborador" que chegou, no final. */
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
