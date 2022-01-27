import { type } from 'os';
import React from 'react';

import styled, { css } from 'styled-components';


export const HeaderWrapper = styled.header.attrs({ className: "w-full h-24 border-b border-slate-800 px-16 flex items-center border-b" })`
border-color: rgb(229 229 229 / 83%);`;


export const MainContentWrapper = styled.div.attrs({ className: "w-full relative z-10" })`box-shadow: -2px 0px 12px rgb(3 87 151 / 8%);`;

export const LogoText = styled.h1.attrs({ className: "text-primary text-4xl font-semibold italic" })``;

export const H1 = styled.h1.attrs({ className: "text-greyprimary pt-32 text-6xl pl-8 text-greyprimary font-normal" })``;

export const TabContainer = styled.div.attrs({ className: "pl-10 w-full m-auto" })``;

export const Tabs = styled.div.attrs(props => ({ className: `pl-8 flex justify-center py-12 flex-col rounded-l-2xl cursor-pointer` }))``;

export const TabsCount = styled.h3.attrs({ className: "text-6xl text-greyprimary font-semibold" })``;

export const TabsText = styled.span.attrs({ className: "text-2xl text-greyprimary mt-2 italic font-normal" })``;

export const NavigationWrapper = styled.div.attrs({ className: "w-1/5 bg-secondary flex flex-col" })``;

export const ActionButton = styled.button.attrs({ className: "bg-primary w-14 h-14 rounded-full text-white text-xl drop-shadow-lg hover:bg-primary-500 transition-colors" })``;

export const ContentWrapper = styled.div.attrs({ className: "W-full px-16 pt-16" })``;

export const GridTable = styled.div.attrs(props => ({ className: `grid grid-cols-17 bg-white ${props.header ? 'drop-shadow-md py-8' : 'border-b py-8'} ` }))`border-color: rgb(229 229 229 / 85%);`;

export const GridColumn = styled.span.attrs(props => ({ className: `col-span-${props.col} ${props.header ? 'font-semibold text-primary' : 'font-normal text-greyprimary flex items-center'}` }))`
line-height: 16px;
font-size:${props => props.header ? '1.2rem' : '1.18rem'};`;

export const StatusIndicator = styled.span.attrs({ className: 'px-5 rounded-xl text-white font-bold py-3 drop-shadow-lg text-lg uppercase' })``;

export const CheckBoxSelector = styled.input.attrs(props => ({ className: "z-10 cursor-pointer w-full h-full absolute opacity-0 top-0 left-0", type: "checkbox", id: `${props.id && props.id}` }))`
&:checked {
  + label {
      background: #7465f2;
      border: none;
      box-shadow: 2px 2px 10px #7465f266;
      span {
          border: 0.5em solid #7465f2;
          animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
          &::before {
              content: "";
              position: absolute;
              top: calc(50% - 0.5rem);
              left: calc(50% - 0.6rem);
              border-right: 2px solid transparent;
              border-bottom: 2px solid transparent;
              transform: rotate(45deg);
              transform-origin: 0% 100%;
              animation: checkbox-check 125ms 200ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
          }
      }
  }
}
&:disabled {
   pointer-events: none;
   + label {
     span {
         opacity: 0.7;
         pointer-events: none;
     }
   }
}
`;


export const CheckBoxLabel = styled.label.attrs({ className: "relative flex w-full h-full rounded-lg" })``;

export const CheckBoxWrapper = styled.div.attrs({ className: "relative w-8 h-8 m-auto z-10" })``;


export const CheckBoxSpan = styled.span.attrs({ className: "flex w-full h-full relative item-center justify-center rounded-lg transition-all" })`
  border: 2px solid rgba(33, 33, 33, 0.2);
`;

export const TitleText = styled.h3.attrs({ className: "text-xl font-semibold relative" })`
&.striked {
  color: #979696;
}
&.striked::after {
  content: " ";
  position: absolute;
  top: calc(50% - 1px);
  left: 0rem;
  width: 0;
  height: 2px;
  background: #484c4f;
  animation-name: strike;
  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
&.striked::before {
  content: " ";
  position: absolute;
  left: 0rem;
  width: 0;
  height: 0;
  background: #484c4f;
  border-radius: 50%;
  animation-name: buble;
  animation-duration: 1100ms;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
`;


export const ModalWrapper = styled.div.attrs({ className: "fixed flex items-center justify-center inset-0 w-full h-full z-30" })`
  background: rgba(0, 0, 0, 0.445);`;

export const ModalCard = styled.div.attrs(props => ({ className: `rounded-2xl p-10 bg-white w-11/12 ${props.maxWidth ? `max-w-${props.maxWidth}` : ' max-w-3xl drop-shadow-2xl'}` }))``;

export const ModalHeader = styled.div.attrs({ className: "text-3xl font-semibold text-greyprimary flex items-center justify-between" })``;

export const ModalCloseButton = styled.button.attrs({ className: "cursor-pointer opacity-70 hover:opacity-100 transition-opacity" })``;

export const ModalBody = styled.div.attrs({ className: "pt-10" })``;

export const InputField = styled.input.attrs({ className: "border w-full block h-16 rounded-xl text-greyprimary text-2xl" })`
  border-color: rgb(229 229 229 / 100%);
  outline: none;
  text-indent: 1rem;
  letter-spacing: 0.08rem;
  background: #fbfbfb;
  `;


export const LableText = styled.label.attrs({ className: "text-xl font-normal text-greyprimary block mb-1" })``;

export const IconButtonWrap = styled.button.attrs({ className: "text-3xl cursor-pointer flex opacity-80 hover:opacity-100 disabled:opacity-40 disabled:cursor-default" })``;

export const PrimaryButton = styled.button.attrs({ className: "text-xl transition-all text-bold bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary-500" })`
  box-shadow: 2px 2px 10px #7465f266;
  &:hover {
      box-shadow: 2px 2px 10px #7465f220;
  }`;