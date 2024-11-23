import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store/store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Navbar /> {/* Статичный Navbar */}
        <App /> {/* Контент приложения */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
