import React from "react";

const Todo = ({ props }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{props.text}</p>
        <p className="category">({props.category})</p>
      </div>
      <div>
        <button>Completed</button>
        <button>X</button>
      </div>
    </div>
  );
};

export default Todo;
