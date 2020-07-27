export const todos = (state = ["memo"], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // closeNewTodo(); をここで実行したい
      return [...state, action.text];
    default:
      return state;
  }
};

export const newTodo = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case "NEW_TODO":
      return true;
    case "CLOSE_NEW_TODO":
      return false;
    default:
      return state;
  }
};
