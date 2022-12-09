import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import List from "../components/list/List";
import React from "react";

const TodoList = () => {
  return (
    <div>
      <Layout />
      <Header />
      <Form />
      <List />
    </div>
  );
};

export default TodoList;
