import React, { useReducer } from "react";
import { Todo } from "./todo.jsx";
import { AddTodo } from './addTodo'
import { TodoReducer, initialState} from "./reducer";
// actions
const REMOVE = "remove"
const ADD = "add"

export const TodoApp = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState)
  
  return (<>
    <AddTodo
      add={(text) => dispatch({type: ADD, text: text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: REMOVE, id: 1})}
        // edit={}
      />
    ))}
  </>);
}