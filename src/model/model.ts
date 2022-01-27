import React, { Dispatch } from "react";

// interfaces
export interface ITodoList {
  id : string;
  title : string;
  isCompleted : boolean;
  date : string;
  tag : string;
  isDeleted: boolean;
}

export interface IStore {
    todoList: ITodoList[];
    dispatch: Dispatch<IActions>;
}

export interface IStoreContextProps {
    children : React.ReactNode;
    todoList: ITodoList[];
    dispatch: Dispatch<IActions>;
}

export interface IActions {
    types : ACTIONS;
    payload : ITodoList;
}

export interface ITableHeaderProps {
    header: true;
}

export interface ITableRowProps {
    header: false;
    todoList: ITodoList;
}

export interface ICheckBoxProps {
    id ?: string;
    disabled ? : boolean;
    isChecked: boolean;
    onChecked: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IModalProps {
    closeModal : () => void;
    children: React.ReactNode;
    heading: string;
}


export interface IInputProps {
    placeHolder: string;
    label: string;
    onFieldChange: (value: string, fieldName: string) => void;
    state: string;
    name: string;
    type: 'text' | 'date'
}

export interface IIconButtonProps {
    iconClass: string;
    onButtonClick: () => void;
    colorClass: string;
    disabled: boolean;
}

export interface IActionIconButtonsProps {
    isDeleted: boolean;
    onDeleteClicked : () => void;
    isCompleted: boolean;
    onEditClicked: () => void;
}

export interface IEditMode {
    isEditMode: boolean;
    editId: string;
}

export interface IFormProps {
    isEditMode: boolean;
    editId: string;
    onFormButtonClick : () => void;
}

export interface IStatusCounts {
    allCount : number;
    completed : number;
    deleted : number;
    pending : number;
}

// enums
export const enum ACTIONS {
    ADD_TODO = 'add-todo',
    EDIT_TODO = 'edit-todo',
    DELETE_TODO = 'delete-todo',
    UPDATE_TODO = 'update-todo'
}

export const enum ROUTES {
    COMPLETED = "completed",
    PENDING = "pending",
    DELETED = "deleted"
}

// constants
export const DEFAULT_TODO_LIST : ITodoList[] = [
   
];

export const FORM_STATE : ITodoList = {
    id: "",
    title: "",
    isCompleted: false,
    tag: "",
    isDeleted: false,
    date: ""
}


export const DEFAULT_EDIT_MODE: IEditMode = {
    isEditMode : false,
    editId: ''
}

export const DEFAULT_STATUS_COUNT: IStatusCounts = {
    allCount: 0,
    completed: 0,
    pending: 0,
    deleted: 0
}

export const COUNTER_SORT_STATE: ITodoList [] = [{
    id: "",
    title: "",
    isCompleted: false,
    tag: "",
    isDeleted: false,
    date: ""
}]