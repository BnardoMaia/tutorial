import React from 'react';
import Titulo from './Titulo';

function App() {
  function clicou(exibicao){
    alert(exibicao)
  }
  return (
    <div>
      <Titulo />
      <button 
        onClick={() => clicou("对不起")}
      > 
        我不会汉语
      </ button>

      <button 
        onClick={() => clicou("Sorry")}
      > 
        I don't speak english
      </ button>
    </div>
  );
}



export default App;
