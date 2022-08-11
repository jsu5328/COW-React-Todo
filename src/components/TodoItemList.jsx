import React from "react";
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  return (
    <div className="itemListContainer">
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
    </div>
  );
};

export default TodoItemList;
