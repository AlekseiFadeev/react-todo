import {DELETE_TODO} from "../types";

const handlers = {
    [DELETE_TODO]: (state, {payload}) => ({...state, todos: payload}),
    DEFAULT: state => state
}

export const todoReaducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}