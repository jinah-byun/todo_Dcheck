import React, { useState } from "react";
import Todo from "../todo/Todo";
import "./style.css";
import { useSelector } from "react-redux";

function List() {
  const works = useSelector((state) => state.todos.list);

  return (
    <div className="list-container">
      <div className="under-title">Working.. 🔥</div>
      <div className="list-wrapper">
        {works
          .filter((work) => {
            return work.isDone === false;
          })
          .map((work) => {
            return <Todo work={work} key={work.id} />;
          })}
      </div>
      <div className="under-title">Done..! 🎉</div>
      <div className="list-wrapper">
        {works
          .filter((work) => {
            return work.isDone === true;
          })
          .map((work) => {
            return <Todo work={work} key={work.id} />;
          })}
      </div>
    </div>
  );
}

export default List;
