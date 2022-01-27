import React from "react";
import { InputField, LableText } from "../../../../assets/styles/styles";
import { IInputProps } from "../../../../model/model";

export default function InputTextField({
  placeHolder,
  label,
  onFieldChange,
  state,
  name,
  type,
}: IInputProps) {
  /**
   * On change handler of fields
   * @param event
   */
  const onChnageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange(event.target.value, event.target.name);
  };

  return (
    <div>
      <LableText>{label}</LableText>
      <InputField
        placeholder={placeHolder}
        name={name}
        value={state}
        onChange={onChnageHandler}
        type={type}
      />
    </div>
  );
}
