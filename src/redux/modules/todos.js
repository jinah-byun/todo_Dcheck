// src/redux/modules/todo.js

//Action Value
const ADD_BTN = "ADD_BTN";
const DEL_BTN = "DEL_BTN";
const CHANGE_BTN = "CHANGE_BTN";

//액션크리에이터
export const addBtn = (payload) => {
  return {
    type: ADD_BTN,
    payload,
  };
};
export const delBtn = (id) => {
  return {
    type: DEL_BTN,
    id,
  };
};
export const changeBtn = (id) => {
  return {
    type: CHANGE_BTN,
    id,
  };
};

//초기값 설정
const initialState = {
  list: [
    { id: 1, title: "입문주차", body: "props이해하기", isDone: false },
    { id: 2, title: "숙련주차", body: "리덕스이해하기", isDone: false },
  ],
};

//리듀서 : 변화를 일으키는 함수 title이랑 body를 바꿔야함
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BTN:
      return { ...state, list: [...state.list, action.payload] };
    case DEL_BTN:
      return state.filter((todo) => todo.id !== action.id);
    case CHANGE_BTN:
      let copyState = [...state];
      return copyState.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return;

    default:
      return state;
  }
};
export default todos;
