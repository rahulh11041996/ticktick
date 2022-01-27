import React from "react";
import {
  CheckBoxLabel,
  CheckBoxSelector,
  CheckBoxSpan,
  CheckBoxWrapper,
} from "../../../../assets/styles/styles";
import { ICheckBoxProps } from "../../../../model/model";

export default function CheckBox({
  id,
  disabled = false,
  isChecked,
  onChecked,
}: ICheckBoxProps) {
  /**
   * Handled the status of the todo list
   * @param event
   */
  const onCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChecked(event);
  };

  return (
    <CheckBoxWrapper>
      <CheckBoxSelector
        id={id}
        disabled={disabled}
        checked={isChecked}
        onChange={onCheckedHandler}
      />
      <CheckBoxLabel htmlFor={id}>
        <CheckBoxSpan />
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
}
