import React from "react";
import ReactDOM from "react-dom/client";
//import { createStore } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
//import reducer from "./reducers/anecdoteReducer";
//import anecdoteReducer from "./reducers/anecdoteReducer";

//const store = configureStore({ reducer: { anecdote: anecdoteReducer } });
//const store = createStore(reducer);
//console.log(store, "store");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
