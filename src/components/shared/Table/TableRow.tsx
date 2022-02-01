import React, { useContext } from "react";
import { DICTIONARY } from "../../../assets/data/dict";
import {
  GridColumn,
  GridTable,
  StatusIndicator,
  TitleText,
} from "../../../assets/styles/styles";
import { postTodos } from "../../../http/todos.api";
import {
  DEFAULT_EDIT_MODE,
  IActions,
  ITableHeaderProps,
  ITableRowProps,
  ITodoList
} from "../../../model/model";
import { StoreContext } from "../../../store/StoreContext";
import TodoForm from "../../TodoForm/TodoForm";
import CheckBox from "../Forms/CheckBox/CheckBox";
import Modal from "../Modal/Modal";
import TableActionButton from "./TableActionButtons/TableActionButton";

export default function TableRow(props: ITableRowProps | ITableHeaderProps) {

  const { dispatch } = useContext(StoreContext);

  const [ showModal, setShowModal ] = React.useState(false);

  const [isEdit, setIsEdit] = React.useState(DEFAULT_EDIT_MODE);

  /**
   * Toggle the status of todo list
   */
  const onStatusChanged = () => {
    if (!props.header) {
      const updatedTodo: ITodoList = {
        ...props.todoList,
        isCompleted: !(props.todoList.isCompleted),
      };

      postTodos(updatedTodo, true).then((todoUpdateAction: IActions) => dispatch(todoUpdateAction));
    }
  };

  /**
   * Toggle delete status
   */
  const onDelete = () => {
    if (!props.header) {
      const updatedTodo: ITodoList = {
        ...props.todoList,
        isDeleted: !props.todoList.isDeleted,
      };

      postTodos(updatedTodo, true).then((todoUpdateAction: IActions) =>
        dispatch(todoUpdateAction)
      );
    }
  };

  /**
   * Enabling edit mode
   * @returns 
   */
  const onEdit = () => {
    if(props.header) return;
    setIsEdit({ isEditMode: true, editId: props.todoList.id })
    setShowModal(true);
  };

  /**
   * Generate 
   * @returns 
   */
  const generateLabelForStatus = (): string => {
    if (props.header) return DICTIONARY.PENDING;
    const list = props.todoList;

    if(list.isDeleted && list.isCompleted) return DICTIONARY.DELETED_COMPLETED;
    if(!list.isDeleted && list.isCompleted) return DICTIONARY.COMPLETED;
    if(list.isDeleted && !list.isCompleted) return DICTIONARY.DELETED_TODO;
    return DICTIONARY.PENDING;
  };

  /**
   * Generate thes class for respective status
   * @returns class name
   */
  const generateStatusClass = (): string => {
    if (props.header) return 'bg-orange';
    const list = props.todoList;

    if(list.isDeleted && list.isCompleted) return 'bg-primary';
    if(!list.isDeleted && list.isCompleted) return 'bg-success';
    if(list.isDeleted && !list.isCompleted) return 'bg-error';
    return "bg-orange";
  };

  

  return (
    <>
      <GridTable header={props.header}>
        <GridColumn col="1" className="col-span-1" header={props.header}>
          <CheckBox
            disabled={props.header || props.todoList.isDeleted}
            onChecked={onStatusChanged}
            id={!props.header ? props.todoList.id : ""}
            isChecked={!props.header ? props.todoList.isCompleted : false}
          />
        </GridColumn>
        <GridColumn col="7" className="col-span-7" header={props.header}>
          {props.header ? (
            DICTIONARY.TITLE
          ) : (
            <TitleText className={props.todoList.isCompleted && "striked"}>
              {props.todoList.title}
            </TitleText>
          )}
        </GridColumn>
        <GridColumn col="2" className="col-span-2" header={props.header}>
          {props.header ? (
            DICTIONARY.DATE
          ) : (
            <TitleText className={props.todoList.isCompleted && "opacity-60"}>
              {props.todoList.date}
            </TitleText>
          )}
        </GridColumn>
        <GridColumn col="2" className="col-span-2" header={props.header}>
          {props.header ? DICTIONARY.TYPE : props.todoList.tag}
        </GridColumn>
        <GridColumn col="3" className="col-span-3" header={props.header}>
          {props.header ? (
            DICTIONARY.STATUS
          ) : (
            <StatusIndicator
              className={ generateStatusClass() }
              completed={props.todoList.isCompleted}
              deleted={props.todoList.isDeleted}
            >
              { generateLabelForStatus() }
            </StatusIndicator>
          )}
        </GridColumn>
        <GridColumn col="2" className="col-span-2" header={props.header}>
          {props.header ? (
            DICTIONARY.ACTIONS
          ) : (
            <TableActionButton
              isCompleted={props.todoList.isCompleted}
              onEditClicked={onEdit}
              isDeleted={props.todoList.isDeleted}
              onDeleteClicked={onDelete}
            />
          )}
        </GridColumn>
      </GridTable>

      {showModal && (
        <Modal
          heading={DICTIONARY.EDIT_TODO_LIST}
          closeModal={() => setShowModal(false)}
        >
          <TodoForm
            isEditMode={isEdit.isEditMode}
            editId={isEdit.editId}
            onFormButtonClick={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
}
