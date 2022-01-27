import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DICTIONARY } from '../../assets/data/dict';
import { ActionButton, HeaderWrapper, MainContentWrapper } from '../../assets/styles/styles';
import { DEFAULT_EDIT_MODE } from '../../model/model';
import Modal from '../shared/Modal/Modal';
import TodoForm from '../TodoForm/TodoForm';
import Content from './Content';

export default function Main() {

  const [ isShow, setIsShow ] = React.useState(false) 
  return (
    <>
      <MainContentWrapper>
        <HeaderWrapper className="justify-end">
          <ActionButton onClick={() => setIsShow(true)}>
            <i className="far fa-plus"></i>
          </ActionButton>
        </HeaderWrapper>

          <Routes>
            <Route path="/" element={<Content />}></Route>
            <Route path="/:id" element={<Content />}></Route>
          </Routes>
  
      </MainContentWrapper>

      {isShow && (
        <Modal heading={DICTIONARY.CREATE_TODO_LIST} closeModal={() => setIsShow(false)}>
          <TodoForm isEditMode={DEFAULT_EDIT_MODE.isEditMode} editId={DEFAULT_EDIT_MODE.editId} onFormButtonClick={() => setIsShow(false)} />
        </Modal>
      )}
    </>
  );
}
