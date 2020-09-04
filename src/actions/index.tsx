export const createTodo = (text: string) => ({
  type: "CREATE_TODO",
  text,
})

export const displayTodoInput = () => ({
  type: "NEW_TODO",
})

export const hiddenTodoInput = (type: string) => ({
  type: "CLOSE_NEW_TODO",
})
