const todos = (state = ["memo"], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.title,
        },
      ];
    default:
      return state;
  }
};

export default todos;
