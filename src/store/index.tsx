import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import MainReducer from "../reducer/main.reducrer"
const enhancer = compose(applyMiddleware(thunk, logger));
/**
 * create new store 
*/
const store = createStore(MainReducer, enhancer);
export default store;