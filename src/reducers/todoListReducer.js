const initialState = {
  todoList: [],
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            data: action.payload.data,
          },
        ],
      };
    case "DEL":
      let newList = state.todoList.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        todoList: newList,
      };
    case "REMOVE_ALL":
      return {
        ...state,
        todoList: [],
      };
    default:
      return state;
  }
};
