import React from "react";
import { IActionIconButtonsProps } from "../../../../model/model";
import IconButton from "../../Forms/IconButton/IconButton";

export default function TableActionButton({
  onDeleteClicked,
  isDeleted,
  onEditClicked,
  isCompleted
}: IActionIconButtonsProps) {
  return (
    <div className="flex gap-10">
      {!isCompleted && !isDeleted && (
        <IconButton
          disabled={false}
          onButtonClick={onEditClicked}
          colorClass="text-primary"
          iconClass="fa-edit"
        />
      )}
      {!isDeleted  ? (
        <IconButton
          disabled={isDeleted}
          onButtonClick={onDeleteClicked}
          colorClass="text-error"
          iconClass="fa-trash-alt"
        />
      ) :
      (
        <IconButton
          disabled={false}
          onButtonClick={onDeleteClicked}
          colorClass="text-primary"
          iconClass="fa-sync"
        />
      )}
    </div>
  );
}
