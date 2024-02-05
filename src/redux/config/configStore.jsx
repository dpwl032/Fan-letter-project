import { createStore } from "redux";
import { combineReducers } from "redux";
import letter from "../modules/letter";

const rootReducer = combineReducers({
  //modules
  letter,
});
const store = createStore(rootReducer);

export default store;
