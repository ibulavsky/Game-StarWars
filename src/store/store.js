import reducer from "./reducer";
import {createStore} from "redux";

// let reducers = combineReducers({
// });


let store = createStore(reducer);

export default store;