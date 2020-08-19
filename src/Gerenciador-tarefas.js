import React from 'react';
import './Gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './Listar/Listar-tarefas';
import AtualizarTarefa from './Atualizar/Atualizar-tarefa';
import CadastrarTarefa from './Cadastrar/Cadastrar-tarefa';

const routes = {
  '/': () => <ListarTarefas/>,
  '/cadastrar': () => <CadastrarTarefa/>,
  '/atualizar/:id': ({id}) => <AtualizarTarefa id={id}/>
}

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
