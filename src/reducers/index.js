import { combineReducers } from "redux";
import { todos, newTodo } from "./todos";

export default combineReducers({
  todos,
  newTodo,
});
