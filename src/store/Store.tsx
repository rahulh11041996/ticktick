import React, { useReducer } from 'react';
import Layout from '../components/layout/Layout';
import { ACTIONS, DEFAULT_TODO_LIST, IActions, ITodoList } from '../model/model';
import StoreContextProvider from './StoreContext';
import { nanoid } from "nanoid";

/**
 * Reducer for state management
 * @returns 
 */
function reducer( state : ITodoList[], actions : IActions ) : ITodoList[] {
    switch(actions.types) {
        case ACTIONS.ADD_TODO:
            const newTodoWithUniqueId : ITodoList = { ...actions.payload, id: nanoid() };
            return [...state, newTodoWithUniqueId ];
        case ACTIONS.UPDATE_TODO:
            return state.map((todo: ITodoList) => (todo.id === actions.payload.id ? { ...todo, isCompleted : !todo.isCompleted } : todo ));
        case ACTIONS.DELETE_TODO:
            return state.map((todo: ITodoList) => (todo.id === actions.payload.id ? { ...todo, isDeleted : !todo.isDeleted } : todo ));
        case ACTIONS.EDIT_TODO:
            return state.map((todo: ITodoList) => (todo.id === actions.payload.id ? actions.payload : todo ));
        default:
            return state;
    }
}

export default function Store() {

  /**
   * userReducer for handle state
   */
  const [ todoList, dispatch ] = useReducer(reducer, DEFAULT_TODO_LIST);

  return (
    <StoreContextProvider todoList={todoList} dispatch={dispatch}>
      <Layout />
    </StoreContextProvider>
  );
}
