import { combineReducers } from "redux";
import { todos, visibleTodoInput } from "./todos";

export default combineReducers({
  todos,
  visibleTodoInput,
});
