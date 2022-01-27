import React, { createContext } from "react";
import { IStore, IStoreContextProps } from "../model/model";

export const StoreContext = createContext<IStore>({} as IStore);

export default function StoreContextProvider(props: IStoreContextProps) {
  const { todoList, dispatch } = props;
  return (
    <StoreContext.Provider value={{ todoList: todoList, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
}
