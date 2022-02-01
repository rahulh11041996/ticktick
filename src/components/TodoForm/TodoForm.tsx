import React, { useContext, useEffect, useState } from "react";
import { DICTIONARY } from "../../assets/data/dict";
import { StoreContext } from "../../store/StoreContext";
import InputTextField from "../shared/Forms/InputTextField/InputTextArea";
import {
  ACTIONS,
  FORM_STATE,
  IActions,
  IFormProps,
  ITodoList,
} from "../../model/model";
import { PrimaryButton } from "../../assets/styles/styles";
import { postTodos } from "../../http/todos.api";

export default function TodoForm({
  isEditMode,
  editId,
  onFormButtonClick,
}: IFormProps) {
  const { dispatch, todoList } = useContext(StoreContext);

  const [formState, setFormState] = useState(FORM_STATE);

  useEffect(() => {
    if (isEditMode) {
      let selectedTodo: ITodoList[] = todoList.filter(
        (todo: ITodoList) => todo.id === editId
      );
      setFormState(selectedTodo[0]);
    }
  }, [isEditMode]);

  const updateTodoList = () => {
    postTodos(formState, isEditMode).then((todoUpdateAction: IActions) =>
      dispatch(todoUpdateAction)
    );

    setFormState(FORM_STATE);
    onFormButtonClick();
  };

  /**
   * On field value change updating the form state
   * @param value
   * @param fieldName
   */
  const onFormUpdate = (value: string, fieldName: string) => {
    setFormState((prevState: ITodoList) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <div>
      <InputTextField
        onFieldChange={onFormUpdate}
        state={formState.title}
        name="title"
        type="text"
        placeHolder={DICTIONARY.ENTER_TODO_TITLE}
        label={DICTIONARY.ENTER_TODO_TITLE}
      />
      <div className="grid grid-cols-2 pt-10 gap-10">
        <InputTextField
          onFieldChange={onFormUpdate}
          state={formState.date}
          name="date"
          type="date"
          placeHolder={DICTIONARY.ENTER_DATE}
          label={DICTIONARY.ENTER_DATE}
        />
        <InputTextField
          onFieldChange={onFormUpdate}
          state={formState.tag}
          name="tag"
          type="text"
          placeHolder={DICTIONARY.ENTER_TYPE_PH}
          label={DICTIONARY.ENTER_TYPE}
        />
      </div>

      <PrimaryButton onClick={updateTodoList} className="mt-8 flex ml-auto">
        {isEditMode ? DICTIONARY.UPDATE_TODO : DICTIONARY.ADD_TODO}
      </PrimaryButton>
    </div>
  );
}
