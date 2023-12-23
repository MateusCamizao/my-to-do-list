import "./Styles.css";
import { useState } from "react";
import Todo from "./components/Todo";
import TodoForms from "./components/TodoForms";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Novo Projeto em ReactJS",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Atualizar Portifolio pos executar o novo projeto.",
      category: "Desenvolvimento",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Procurar Vagas de React",
      category: "Trabalho",
      isCompleted: true,
    },
  ]);
  return (
    <div className="Container">
      <h1 className="Title">To Do List</h1>
      <div className="ToDoList">
        {todos.map((todo) => (
          <Todo props={todo} />
        ))}
      </div>
      <TodoForms />
    </div>
  );
}

export default App;
