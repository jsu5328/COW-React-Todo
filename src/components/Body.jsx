import React from "react";
import Filter from "./Filter";
import Input from "./Input";
import TodoItemList from "./TodoItemList";
const Body = () => {
  return (
    <div>

      <div className="bodyTop">
        <Filter></Filter>
        <Input></Input>
      </div>

      <div className="bodyBottom">
      <TodoItemList></TodoItemList>
      </div>
      
    </div>
  );
};
export default Body;
