
import { combineReducers } from "redux";
import { homeReducer } from "../modules/home";
/**
 * combine all reducer into single root reducer
*/
const MainReducer = combineReducers({
    homeReducer
})


export default MainReducer;