import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import "./index.css"
import Main from "./components/main"
import Header from "./components/header"

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Main />
  </Provider>,
  document.getElementById("root"),
)
