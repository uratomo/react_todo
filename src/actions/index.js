export const addTodo = (text) => ({
  type: "ADD_TODO",
  text,
});

export const newTodo = () => ({
  type: "NEW_TODO",
});

export const closeNewTodo = () => ({
  type: "CLOSE_NEW_TODO",
});
