import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DICTIONARY, ROUTE_BUILDER } from "../../assets/data/dict";
import {
  HeaderWrapper,
  LogoText,
  NavigationWrapper,
  TabContainer,
  Tabs,
  TabsCount,
  TabsText,
} from "../../assets/styles/styles";
import { DEFAULT_STATUS_COUNT, IRouteBuilder, IStatusCounts, ITodoList, ROUTES } from "../../model/model";
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
        <LogoText>{DICTIONARY.APP_TITLE}</LogoText>
      </HeaderWrapper>
      <TabContainer>
        {ROUTE_BUILDER.map((navigator: IRouteBuilder) => (
          <NavLink to={ navigator.path } key={navigator.countType}>
            <Tabs className="tabs">
              <TabsCount>
                { statusCounts[navigator.countType] }
              </TabsCount>
              <TabsText>{ navigator.label }</TabsText>
            </Tabs>
          </NavLink>
        ))}
      </TabContainer>
    </NavigationWrapper>
  );
}
