import React from 'react';
import {TodoList} from "./components/TodoList";
import {TodoState} from "./context/todoApp/todoState";

function App() {
    return (
        <TodoState>
            <div className="container">
              <TodoList/>
            </div>
        </TodoState>
    );
}

export default App;
