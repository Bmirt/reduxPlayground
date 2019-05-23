import { UPDATE_TITLE, DELETE_TITLE } from "../constants/todosConstants";

export const changeTitle = payload => ({
  type: UPDATE_TITLE,
  payload
});

export const deleteTodo = payload => ({
  type: DELETE_TITLE,
  payload
});
