import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const store = createStore(
  rootReducer,
  {
    todos: [
      {
        id: 1,
        title: "Something"
      },
      {
        id: 2,
        title: "Another Something"
      }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
