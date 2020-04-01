import React, {useReducer, useState} from "react"
import {TodoContext} from "./todoContext";
import {todoReaducer} from "./todoReducer";
import {DELETE_TODO} from "../types";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [{
            id: 1,
            title: "First todo",
            sub: "This is first todo"
        },
        {
            id: 2,
            title: "Second todo",
            sub: "This is second todo"
        },
        {
            id: 3,
            title: "Third todo",
            sub: "This is third todo"
        }]
    }

    const [state, dispatch] = useReducer(todoReaducer, initialState)

    const deleteTodo = (id) => {
        let todos = state.todos
        todos.map((todo, i) => {
            if(todo.id === id){
                todos.splice(i, 1)
            }
        })

        dispatch({
            type: DELETE_TODO,
            payload: todos
        })
    }

    const {todos} = state

    return (
        <TodoContext.Provider value={{
            deleteTodo ,todos
        }}>
            {children}
        </TodoContext.Provider>
    )
}