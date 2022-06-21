import React from "react";
import Todos from "./Todos";

// Displays each todo as an unordered list. The filtered todo list contains many objects where each object
// is a unique (or not unique) todo
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
