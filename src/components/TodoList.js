import React, {useContext} from "react"
import {TodoContext} from "../context/todoApp/todoContext";

export const TodoList = () => {
    const {deleteTodo, todos} = useContext(TodoContext)

    const handleDeleteClick = (id) => {
        deleteTodo(id)
    }

    return (
        <div className="main-wrapper">
            <h1>Todo List</h1>
            {todos.map(todo => (
                <div className="card mb-3" style={{width: "18rem"}} key={todo.id}>
                    <div className="card-body">
                        <h5 className="card-title">{todo.title}</h5>
                        <p className="card-text">{todo.sub}</p>
                        <button type="button" className="btn btn-primary btn-sm">Primary</button>
                        <button type="button" className="btn btn-danger btn-sm float-right" onClick={() => (handleDeleteClick(todo.id))}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}