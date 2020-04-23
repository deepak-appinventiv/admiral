import Utils from "../../utils";
import { MovieList } from "../../modal";
export function homeReducer(state: MovieList = new MovieList, action: any){
    switch(action.type){
        case Utils.ActionName.GET_MOVIES:
            return { ...state, ...action.payload}
        default:
            return state;
    }
}