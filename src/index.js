import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alertState = true;

function reducer2(state = alertState, action) {
  if (action.type === "close") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let defaultState = [
  {
    id: 0,
    name: "멋진신발",
    quantity: 2,
  },
  {
    id: 1,
    name: "멋진신발2",
    quantity: 1,
  },
];

function reducer(state = defaultState, action) {
  if (action.type === "addItem") {
    let newState = [...state];

    let selectedIndex = state.findIndex((item) => {
      return item.id === action.payload.id;
    });
    // let isRegister = state.find((item) => item.id === action.payload.id);

    if (selectedIndex >= 0) {
      newState[selectedIndex].quantity++;
    } else {
      newState.push(action.payload);
    }

    return newState;
  } else if (action.type === "add") {
    let newState = [...state];
    newState[action.data.id].quantity++;
    return newState;
  } else if (action.type === "minus") {
    let newState = [...state];
    newState[action.data.id].quantity--;
    return newState;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
