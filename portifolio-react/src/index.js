import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/** arquivo dom é uma sequancia de algoritimos raiz dentro da pagina html */
const root = ReactDOM.createRoot(document.getElementById('root'));
/** todos ospoderes da aplicação é passado para o arquivo dom pelo root */
/**render é que faz uma o computador fazer a imagem na tela */
root.render(
  /** inspeciona o codigo antes de passar pro index*/
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/**Função que verifica o desenpenho do seu codigo */
reportWebVitals();