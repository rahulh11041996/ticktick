import React, { useEffect, useReducer } from 'react';
import Layout from '../components/layout/Layout';
import { ACTIONS, DEFAULT_TODO_LIST, IActions, IAsyncActions, ITodoList } from '../model/model';
import StoreContextProvider from './StoreContext';
import { getTodos } from '../http/todos.api';

/**
 * Reducer for state management
 * @returns 
 */
function reducer(
  state: ITodoList[],
  actions: IActions | IAsyncActions
): ITodoList[] {
  switch (actions.types) {
    case ACTIONS.GET_TODO:
      return Array.isArray(actions.payload) ? actions.payload : state;
    case ACTIONS.ADD_TODO:
      return [...state, actions.payload];
    case ACTIONS.EDIT_TODO:
        return state.map((todo: ITodoList) => (todo.id === actions.payload.id ? actions.payload : todo ));
    default:
      return state;
  }
}

export default function Store() {

  useEffect(() => {
    getTodos().then(todoGetAction => dispatch(todoGetAction));
  }, [])

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
