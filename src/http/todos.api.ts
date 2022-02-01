import axios from "axios";
import { ACTIONS, IActions, IAsyncActions, ITodoList } from "../model/model";
import { ApiRoutes } from "./api.routes";

export const getTodos = () => axios.get(ApiRoutes.TODO_LIST).then((todosResponse: any) => ({ types: ACTIONS.GET_TODO, payload: todosResponse.data }) as IAsyncActions);

export const postTodos = (payload: ITodoList, isEditMode: boolean) => {
    if (isEditMode) {
        return axios.put(ApiRoutes.EDIT_LIST(payload.id), payload).then((todosResponse: any) => ({ types: ACTIONS.EDIT_TODO, payload: todosResponse.data }) as IActions);
    }
    return axios.post(ApiRoutes.TODO_LIST, payload).then((todosResponse: any) => ({ types: ACTIONS.ADD_TODO, payload: todosResponse.data }) as IActions)
};