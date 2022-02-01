import { IRouteBuilder, ROUTES } from "../../model/model"

export const DICTIONARY = {
    TITLE : "Title",
    DATE : "Date",
    TYPE : "Type",
    ACTIONS : "Actions",
    STATUS : "Status",
    COMPLETED : "Completed",
    PENDING : "Pending",
    CREATE_TODO_LIST: "Create New Todo",
    ENTER_TODO_TITLE: "Enter Todo Title",
    ENTER_DATE : "Enter Date",
    ENTER_TYPE : "Enter Todo Type (eg: Work, School, Personal)",
    ENTER_TYPE_PH : "Enter Todo Type",
    EDIT_TODO_LIST : "Edit Todo",
    ADD_TODO : "Add Todo",
    UPDATE_TODO : "Update Todo",
    DELETED_TODO : "Deleted",
    DELETED : "Deleted",
    DELETED_COMPLETED : "Completed & Deleted",
    NO_TODO_LIST : "No todo list to show.",
    ALL_TODO : "All Todos",
    APP_TITLE : "Tick Tick"
}

export const ROUTE_BUILDER: IRouteBuilder[] = [
    {
        path : '/',
        countType: 'allCount',
        label: DICTIONARY.ALL_TODO
    },
    {
        path : `/${ROUTES.COMPLETED}`,
        countType: 'completed',
        label: DICTIONARY.COMPLETED
    },
    {
        path : `/${ROUTES.PENDING}`,
        countType: 'pending',
        label: DICTIONARY.PENDING
    },
    {
        path: `/${ROUTES.DELETED}`,
        countType: 'deleted',
        label: DICTIONARY.DELETED
    },
]