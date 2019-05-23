import { UPDATE_TITLE, DELETE_TITLE } from "../constants/todosConstants";

const rootReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_TITLE:
      const todos = [...state.todos];
      todos.splice(payload.index, 1, payload.ourObject);
      return {
        ...state,
        todos: [...todos]
      };
    case DELETE_TITLE:
      return payload;
    default:
      return state;
  }
};

export default rootReducer;
