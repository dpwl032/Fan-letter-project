import { createStore } from "redux";
import letters from "redux/modules/letters";

const rootReducer = combineReducers({ letters });

const store = createStore(rootReducer);

export default store;
