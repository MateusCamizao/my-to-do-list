import React from "react";

const TodoForms = () => {
  return (
    <div className="TodoForm">
      <h2>Criar Tarefa</h2>
      <form>
        <input type="text" placeholder="Digite o titulo." />
        <select>
          <option value="">Selecione uma Categoria.</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForms;
