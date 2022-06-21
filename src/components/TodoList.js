import React from "react";
import Todos from "./Todos";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todos
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={filteredTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
