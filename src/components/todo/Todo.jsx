import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delBtn } from "../../redux/modules/todos";
import { changeBtn } from "../../redux/modules/todos";
import "./style.css";

function Todo({ work }) {
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(delBtn(id));
  };
  const handleshift = (id) => {
    dispatch(changeBtn(id));
  };

  return (
    <div className="todo-container">
      <div className="todo-title">{work.title}</div>
      <div className="todo-body">{work.body}</div>
      <div className="button-set">
        <button
          className="todo-delete-button"
          onClick={() => {
            handleRemove();
          }}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button"
          onClick={() => {
            handleshift();
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
}
export default Todo;
