import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderWrapper,
  LogoText,
  NavigationWrapper,
  TabContainer,
  Tabs,
  TabsCount,
  TabsText,
} from "../../assets/styles/styles";
import { DEFAULT_STATUS_COUNT, ITodoList, ROUTES } from "../../model/model";
import { StoreContext } from "../../store/StoreContext";

export default function Navigation() {

  const [statusCounts, setStatusCount] = React.useState(DEFAULT_STATUS_COUNT);

  const { todoList } = useContext(StoreContext)


  useEffect(() => {
    setStatusCount({
      ...DEFAULT_STATUS_COUNT,
      allCount: todoList.length,
    });
    todoList.map((todo: ITodoList) => {
      if (todo.isCompleted)
        setStatusCount((prevCount) => ({
          ...prevCount,
          completed: prevCount.completed + 1,
        }));
      if (todo.isDeleted)
        setStatusCount((prevCount) => ({
          ...prevCount,
          deleted: prevCount.deleted + 1,
        }));
      if (!todo.isCompleted && !todo.isDeleted)
        setStatusCount((prevCount) => ({ ...prevCount, pending: prevCount.pending + 1 }));
    });
  }, [todoList]);

  return (
    <NavigationWrapper>
      <HeaderWrapper>
        <LogoText>Tick Tick</LogoText>
      </HeaderWrapper>
      <TabContainer>
        <NavLink to="/">
          <Tabs className="tabs">
            <TabsCount>{statusCounts.allCount}</TabsCount>
            <TabsText>All Todos</TabsText>
          </Tabs>
        </NavLink>
        <NavLink to={"/" + ROUTES.COMPLETED}>
          <Tabs className="tabs">
            <TabsCount>{statusCounts.completed}</TabsCount>
            <TabsText>Completed</TabsText>
          </Tabs>
        </NavLink>
        <NavLink to={"/" + ROUTES.PENDING}>
          <Tabs className="tabs">
            <TabsCount>{statusCounts.pending}</TabsCount>
            <TabsText>Pending</TabsText>
          </Tabs>
        </NavLink>
        <NavLink to={"/" + ROUTES.DELETED}>
          <Tabs className="tabs">
            <TabsCount>{statusCounts.deleted}</TabsCount>
            <TabsText>Deleted</TabsText>
          </Tabs>
        </NavLink>
      </TabContainer>
    </NavigationWrapper>
  );
}
