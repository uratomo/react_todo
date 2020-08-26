export const todos = (
  state = ["memo"],
  action: { type: string; text: string },
) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, action.text]
    default:
      return state
  }
}

export const visibleTodoInput = (
  state = false,
  action: { type: string },
): boolean => {
  switch (action.type) {
    case "NEW_TODO":
      return true
    case "CLOSE_NEW_TODO":
      return false
    default:
      return state
  }
}
