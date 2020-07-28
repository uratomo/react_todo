export const createTodo = (text) => ({
  type: "CREATE_TODO",
  text,
});

export const displayTodoInput = () => ({
  type: "NEW_TODO",
});

export const hiddenTodoInput = () => ({
  type: "CLOSE_NEW_TODO",
});
