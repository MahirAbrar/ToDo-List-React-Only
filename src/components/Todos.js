import React from "react";

function Todos({ text, setTodos, todo, todos }) {

  // Filters (removes) the object with the ID from the DIV/object
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Warning: ID collision can occur.
  // Updates todo's status with the ID from the DIV/object
  const completeHandler = () => {
    setTodos(
      // Goes through each todo and updates the one with the matching ID.
      todos.map((item) => {
        
        if (item.id === todo.id) {         //Current problem, only the first ID found would be updated which may be wrong.
          return {
            ...item,
            completed: !item.completed,
          };
        }
        // Not matching ID so return item
        return item;
      })
    );
  };

  // Ui of each todo
  return (
    <div className="todo">
      {/* if condition inside className using JSX */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {" "}
        {text}{" "}
      </li>
      {/* Each todo contains a complete button and a trash button */}
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>     {/* Icon to represent the button and trash */}
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todos;
