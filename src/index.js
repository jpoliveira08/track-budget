import React from 'react';

// Importanto React object do ReactDom
import ReactDOM from 'react-dom/client';

/*
Caso queiramos utilizar uma feature (function, variable) de um
arquivo A em uma arquivo B (dividindo o código entra multiplos arquivos)
então temos de exportar a feature do aqruivo A e importar no arquivo B
*/
import './index.css';
/* 
Em casos de utilizar uma biblioteca de terceiro, ou algum
de nossos arquivos .js devemos omitir a extensão js.
Para os demais tipos de arquivo a extensão deve ser específicada.
*/
import App from './App';


/*
createRoot() basicamente cria o principal entrypoint, hook de toda
a interface de usuário que iremos construir.
Ela diz ao React onde a aplicação deve ser colocada quando
a pagina web for carregada 
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/* 
Utilizando uma sintaxe chamada de JSX
App é um componente
*/
root.render(<App />);
