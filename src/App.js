import React, { useState, useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  //Initialize all the states
  const [inputText, setInputText] = useState("");            //ToDo text which is going to be inputted.
  const [todos, setTodos] = useState([]);                    //Stores all the todos. Starts with an empty array.
  const [status, setStatus] = useState("all");               //Set the status of a todo if it is completed or not.
  const [filteredTodos, setFilteredTodos] = useState([]);    //deals with showing only complete, incomplete or all todos.

  // When the application is restarted, the todos from the local storage are received.
  useEffect( () => {
    getLocalTodos()
  }, []);      //This is invoked once as indicated by the [] at the start of the application

  //UseEffect, run when there is a change in todos or status
  //todos (adding or removing todos)
  //status (completing or incompleting a todo)

  useEffect(() => {
    ////////////////////////////// Functions of the useEffect.
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    // Clear and add all todos to localStorage and stores it as JSON.
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos))
    };


    //////////////////////////// Invoking the functions for useEffect.
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  // This is run once at the start of the app and is invoked by the useEffect at the start of the app function
  const getLocalTodos = () => {
    // If there are no ToDos in the local storage, then create a new file named todos and store it as an array.
    if (localStorage.getItem("todos") === null) {
      // Store the data as JSON using JSON.stringify
      localStorage.setItem("todos", JSON.stringify([]));
      } 
    else 
    // If there are existing ToDos, then load and parse the JSON data into an array.
      {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  // The frontend which is going to be outputted is under return.
  // For each components, the application sends the states which are used.
  return (
    <div>
      <h1 id="main_head_id">Todo List</h1>

      {/* Displays the form where the user is going to input the ToDos. */}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      
      {/* Displays the list of ToDos. ToDoList contains multiple todos and shows the filtered list. */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
