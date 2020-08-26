export const createTodo = (text: any) => ({
  type: "CREATE_TODO",
  text,
})

export const displayTodoInput = () => ({
  type: "NEW_TODO",
})

export const hiddenTodoInput = (type: any) => ({
  type: "CLOSE_NEW_TODO",
})
