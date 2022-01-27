import React from 'react';
import { createPortal } from 'react-dom';
import { ModalBody, ModalCard, ModalCloseButton, ModalHeader, ModalWrapper } from '../../../assets/styles/styles';
import { IModalProps } from '../../../model/model';

export default function Modal({ closeModal, children, heading }: IModalProps) {
  const id = document.getElementById("portals");
  if (id === null) return null;
  return createPortal(
    <ModalWrapper>
      <ModalCard maxWidth="6xl" className="max-w-6xl">
        <ModalHeader>
          <h1>{heading}</h1>
          <ModalCloseButton
            className="far fa-times"
            onClick={() => closeModal()}
          />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalCard>
    </ModalWrapper>,
    id
  );
}
