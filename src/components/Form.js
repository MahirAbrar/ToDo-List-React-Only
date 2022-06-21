import React from "react";

// receives all the states from the function which displays this component.
function Form({ inputText, setInputText, todos, setTodos, status, setStatus }) {

  // Updates InputText whenever there is a change in state in the text field.
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  // Handles when the plus button (aka add button) is pressed.
  const submitTodoHandler = (e) => {
    // This code required so the button works and the page does not refresh.
    e.preventDefault();
    // Updates toDo array
    setTodos([
      // existing todos + new todo
      /* Current form of ID is bad and there are chances of overlapping. Error would be ignored and would not cause major
      problem in the application */
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    
    // Sets input text to an empty screen for ease of use
    setInputText("");
  };

  // Handles when status is changed.
  // e.target.value can be "all", "completed" or "uncompleted"
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  // The UI of the form. AKA input text, plus button and drop down for complete, incomplete & all.
  return (
    <div>
      <form>
        <input
          value={inputText}
          type="text"
          className="todo-input"
          onChange={inputHandler}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          {/* Icon of the add todo button */}
          <i className="fas fa-plus-square" />
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            {/* value is the e.target.value which gets passed to the status handler. */}
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
