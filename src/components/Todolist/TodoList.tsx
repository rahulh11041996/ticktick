import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { COUNTER_SORT_STATE, ITodoList, ROUTES } from "../../model/model";
import { StoreContext } from "../../store/StoreContext";
import NoData from "../shared/NoData/NoData";
import TableRow from "../shared/Table/TableRow";

export default function TodoList() {
  const { todoList: store } = useContext(StoreContext);

  const [todoList, setTodoList] = React.useState(COUNTER_SORT_STATE);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if(id !== ROUTES.COMPLETED && id !== ROUTES.DELETED && id !== ROUTES.PENDING && id !== undefined) navigate('/');
    
    setTodoList(COUNTER_SORT_STATE);
    
    filterStoreBasedOnParams(id);
  }, [store, id]);

  /**
   * Filtering store based on params
   * @param id
   */
  const filterStoreBasedOnParams = (id: string | undefined): void => {
    switch (id) {
      case ROUTES.COMPLETED:
        setTodoList(store.filter((todo: ITodoList) => todo.isCompleted));
        break;
      case ROUTES.DELETED:
        setTodoList(store.filter((todo: ITodoList) => todo.isDeleted));
        break;
      case ROUTES.PENDING:
        setTodoList(
          store.filter(
            (todo: ITodoList) => !todo.isCompleted && !todo.isDeleted
          )
        );
        break;
      default:
        setTodoList(store);
    }
  };

  return (
    <>
      <TableRow header={true} />
      {todoList.length ? (
        todoList.map((todo: ITodoList) => (
          <TableRow key={todo.id} todoList={todo} header={false} />
        ))
      ) : (
        <NoData />
      )}
    </>
  );
}
