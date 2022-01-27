import React from "react";
import { IconButtonWrap } from "../../../../assets/styles/styles";
import { IIconButtonProps } from "../../../../model/model";

export default function IconButton({
  iconClass,
  colorClass,
  onButtonClick,
  disabled,
}: IIconButtonProps) {
  return (
    <IconButtonWrap
      onClick={onButtonClick}
      className={colorClass}
      disabled={disabled}
    >
      <i className={`fas ${iconClass}`}></i>
    </IconButtonWrap>
  );
}
