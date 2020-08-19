import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './Listar-tarefas';

describe('Teste do componente da Listagem de Tarefa', () =>{

    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarTarefas />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
});