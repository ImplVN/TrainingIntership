import React from "react";
import Listtrain from "./Listtrain";
import { ItemList } from "../styled/styled";

const List = (props) => {
  const { data } = props;
  return (
    <ItemList className="items">
      {data && data.map((a, i) => <Listtrain key={i} weather={a} />)}
    </ItemList>
  );
};

export default List;
