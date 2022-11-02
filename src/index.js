import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* O "StrictMode" faz com que logs de ajuda sejam mostrados no console do navegador, para nos ajudar 
                         no desenvolvimento. Porém, esses logs somente são mostrados em ambiente de desenvolvimento, no de produção, não!
                         Uma curiosidade é que o "StrictMode" cria uma rendenização a mais, por esse motivo os dados são mostrados duplicados 
                         no console. =) */}
    <App />
  </React.StrictMode>
);