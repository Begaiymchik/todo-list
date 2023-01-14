import React from 'react';
import './app.css'
import './img/todoBg.jpg'
import TodoList from "../todo-list";
import Header from "../header/header";
import SearchPanel from "../search-panel";
import AddTodo from "../add-todo";

function App () {
    return (
        <div className='main'>
       <div className="todo-container">
           <Header/>
           <SearchPanel/>
           <TodoList/>
           <AddTodo/>
       </div>
        </div>
    );
}

export default App;